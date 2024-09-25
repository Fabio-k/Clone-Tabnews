import query from "infra/database";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgreVersion = await query("SHOW SERVER_VERSION;")
  const maxConnections = await query("SHOW MAX_CONNECTIONS;")
  const databaseName = process.env.POSTGRES_DB
  const openConnections = await query( {
    text:"SELECT COUNT(*)::int used FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName]
  })

  const databaseVersionResult = postgreVersion.rows[0].server_version
  const databaseMaxConnectionsResult = parseInt(maxConnections.rows[0].max_connections)
  const databaseOpenConnectionsResult = openConnections.rows[0].used
  response.status(200).json({ 
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionResult,
        max_connections: databaseMaxConnectionsResult,
        open_connections: databaseOpenConnectionsResult
      }
    }
  });
}
export default status;

test("GET to /api/V1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/V1/status");
  expect(response.status).toBe(200);
  const responseBody = await response.json()

  expect(responseBody.updated_at).toBeDefined()
  const parserdUpdatedAt = new Date(responseBody.updated_at).toISOString()
  expect(responseBody.updated_at).toEqual(parserdUpdatedAt)

  const database = responseBody.dependencies.database

  expect(database.version).toBeDefined()
  expect(database.max_connections).toBe(100)
  expect(database.open_connections).toBe(1)
});

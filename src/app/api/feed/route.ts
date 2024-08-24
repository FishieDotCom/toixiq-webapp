import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const TOKEN = process.env.TOKEN;

    const TOKEN =
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI5ZDRkMTZlMy03YzZiLTRmY2ItYTFjOC1hZmNkNzlkMmQ1M2UiLCJ1bmlxdWVfbmFtZSI6IkdpZ2FDaGFkIiwibmJmIjoxNzI0MDQ4MzUwLCJleHAiOjE3MjkzMTg3NTAsImlhdCI6MTcyNDA0ODM1MCwiYXVkIjoiaHR0cHM6Ly9hcGkudG94aXEueHl6In0.Nnto5cL6Onp9tDqz4w02buc_V3rrRy_vZm0wI7j04LyASmHoULUEWigJyJ0HtzDPxnqbbeGkmSXb-TsanNkONQ";

    const response = await fetch("https://api.toxiq.xyz/api/Post/Feed", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        audience: 0,
        sort: 0,
        page: 1,
        count: 30,
      }),
    });

    if (!response.ok) {
      throw new Error(`Http error! statue: ${response.status}`);
    }

    const data = await response.json();

    // remove this when in prod
    console.log(data);
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch data." });
  }
}

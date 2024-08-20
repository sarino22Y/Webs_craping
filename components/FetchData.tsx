import jsdom from "jsdom";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "./ui/table";
import Link from "next/link";

export default async function FetchData() {
  const url = "https://www.olympiandatabase.com/index.php?id=180770&L=1";
  const htmlSource = await fetch(url).then((r) => r.text());
  const dom = new jsdom.JSDOM(htmlSource);
  const tables = dom.window.document.querySelectorAll("table.frame_space");
  if (tables.length < 3) {
    throw new Error("Cannot find the table with medals");
  }

  const rows = tables[2].querySelectorAll("tr");
  const continents = [];
  for (let i = 1; i < 10; i++) {
    const cells = rows[i + 2].querySelectorAll("td");
    if (cells[1].textContent?.trim() != "") {
      continents.push({
        name: cells[1].textContent?.trim(),
        gold: parseInt(cells[3]?.textContent?.trim() || "0", 10),
        silver: parseInt(cells[4]?.textContent?.trim() || "0", 10),
        bronze: parseInt(cells[5]?.textContent?.trim() || "0", 10),
        total: parseInt(cells[6]?.textContent?.trim() || "0", 10),
      });
    }
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>GOLD </TableHead>
            <TableHead>SILVER</TableHead>
            <TableHead>BRONZE</TableHead>
            <TableHead>TOTAL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {continents &&
            continents.map((continent, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{continent.name}</TableCell>
                  <TableCell>{continent.gold}</TableCell>
                  <TableCell>{continent.silver}</TableCell>
                  <TableCell>{continent.bronze}</TableCell>
                  <TableCell>{continent.total}</TableCell>
                </TableRow>
              );
            })}
          <TableRow></TableRow>
        </TableBody>
      </Table>

      <Link
        href={url}
        className="text-sm italic underline pt-10"
        target="_blank"
      >
        Source
      </Link>
    </div>
  );
}

import React, { useState } from "react";
import { Button } from "./ui/button";
import FetchData from "./FetchData";
import { Card } from "./ui/card";
import ShowData from "./ShowData";

export default function Section() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Card className="flex flex-col gap-4 p-12">
        <h2 className="text-2xl font-bold">Section 1</h2>
        <Button variant="outline" className="w-40"> Commencer</Button>
        <div className="flex gap-2">
            <FetchData />
        </div>
      </Card>
      <Card className="flex flex-col p-12 gap-2">
        <h2 className="text-2xl font-bold">Section 2</h2>
        <ShowData />
      </Card>
    </div>
  );
}

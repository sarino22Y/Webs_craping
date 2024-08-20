"use client"

import { useState } from 'react';
import { Button } from './ui/button'

export default function ShowData() {
    const [datas, setData] = useState(["Test 1"]);
    const handleClick = () => {
        console.log(datas[0]);
        datas[0] == "Test 1" ? setData(["Test 2"]) : setData(["Test 1"]);
    };

  return (
    <div>
      <Button variant="outline" className="w-40" onClick={handleClick}> Commencer</Button>
        <div className="flex gap-2">
        {
                datas && datas.map((data, index) => {
                    return <div key={index}>
                        {data}
                    </div>
                })
            }
        </div>
    </div>
  );
}

import { Card, Paper, Typography } from "@mui/material";
import { ChangeEvent, useCallback, useState } from "react";
import { BingoStatusType, NumberDataType, numbersData } from "./data";
import Counter from "./Counter";
const cardClass =
  "p-4 h-[50px] w-[50px] flex justify-center items-center cursor-pointer bg-red-500";
const activeStyle =
  "border flex justify-center items-center cursor-pointer hover:bg-slate-100";
const columnStyle =
  "border flex justify-center items-center cursor-pointer bg-green-500 text-white";
function GameCard() {
  const [isFill,setIsFill] = useState(true)
  const [count,setCount] = useState(1)
  const [columnData, setColumnData] = useState<NumberDataType[]>(numbersData);
  const [bingoStatus, setBingoStatus] = useState<BingoStatusType[]>([
    { status: false, text: "b" },
    { status: false, text: "i" },
    { status: false, text: "n" },
    { status: false, text: "g" },
    { status: false, text: "o" },
  ]);
  const handleBingoClick = useCallback(
    (index: number) => {
      const updated = [...bingoStatus];
      updated[index] = { ...updated[index], status: true };
      setBingoStatus(updated);
    },
    [bingoStatus]
  );

  const handleNumberClick =   (index: number) => {
    const updated = [...columnData];
    updated[index] = {
      ...columnData[index],
      status:false,
    };
    setColumnData(updated);
  }

const handleFillClick = (index: number)=>{
  const updated = [...columnData];
  if(updated[index].num == null){
    updated[index] = {
      ...columnData[index],
      num:count,
    };
    setColumnData(updated);
    if(count < 25){
      setCount(prev=>prev+1)
    }else{
      setIsFill(false)
      setCount(1)
    }
  }
}

const handleClick = (e:ChangeEvent<HTMLElement>)=>{
   const index = parseInt(e.target.getAttribute('data-index') as string)
   
   isFill ? handleFillClick(index) : handleNumberClick(index)
}

  return (
    <Paper elevation={3} className="w-full h-full p-3 grid grid-cols-4">
      {/* <div className="col-span-full">
      <Counter/>
      </div> */}
      <div className="col-span-3 flex flex-col items-center justify-center gap-2">
       {isFill && <div className="w-16 h-16  bg-green-500 flex justify-center items-center rounded-full">
         <Typography variant="h5" sx={{color:"white"}}>{count}</Typography>
         </div>}
        <div className="border-2 rounded w-[400px] h-[400px] grid grid-cols-5">
          {columnData.map((item, index: number) => (
            <div
            data-index={index}
              onClick={handleClick}
              key={`columnkey${index}`}
              className={item.status ? activeStyle : columnStyle}
            >
              {item.num}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-rows-5 items-center justify-center">
        {bingoStatus.map((item: BingoStatusType, index: number) => (
          <Card
            onClick={() => {
              handleBingoClick(index);
            }}
            key={`titeof${index}`}
            sx={
              item.status
                ? { backgroundColor: "success.main", color: "white" }
                : null
            }
            className={cardClass}
          >
            <Typography textTransform="capitalize" variant="h6">
              {item.text}
            </Typography>
          </Card>
        ))}
      </div>
    </Paper>
  );
}

export default GameCard;

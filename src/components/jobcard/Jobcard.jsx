import React from "react";
import style from "./Jobcard.module.css";
import Image from "next/image";
const arr=[{
  img:'/job1.avif',
},
{
  img:'/job2.avif',
},
{
  img:'/job3.avif',
}]

const Jobcard = ({item,index}) => {

  return (
    <div className={style.container} >
      {/* style={index%2===0 ?{}:{flexDirection:"row-reverse",justifyContent:"space-between"}} */}
      <div className={style.imgcontainer}>
        <Image alt="" src={item.img || arr[Math.floor(index%arr.length)].img}  fill/>
      </div>
      <div className={style.detailscontainer}>
        <h2>{item.title}</h2>
        <p className={style.date}>{item.createdAt.toString().slice(0,10)}</p>
        <div className={style.jobdetails}>
            <div className={style.single}>
            <p >Job Type : </p>
            <span>{item.type}</span>
            </div>
            <div className={style.single}>
            <p>Experience : </p>
            <span>{item.experience}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;

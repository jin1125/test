// let unco = "hello world";
// // unco = "hello world2";

// const bigUnco = "he..hello world";

// // bigUnco = 'he..hello world2';

let inoki = ["11", "22", "33", "44"];

// // console.log(inoki[1]);

// // let index = 0;

// while (index < inoki.length ) {
//   console.log(inoki[index]);
//   index ++;
// }



const test = (arg) => {
  if (inoki.length > arg) {
    console.log("!!!");
  } else {
    console.log("###");
  }
};


const unko2 = {
  color:'pink',
  size:'large',
  purfume:'mint',
  goTilet:()=>{
    console.log('hello world');
  }
};

document.getElementsByTagName('button')[0].addEventListener('click',()=>{
  alert('aaaaaa ');
})
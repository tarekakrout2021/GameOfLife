
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function numOfNeigh(arr,i,j) {
  var s=0; 
  if(i+1<r){
    if(arr[i+1][j]==1 )
      s++;
    if(j+1<c)
      if(arr[i+1][j+1]==1)
        s++;
    if(j-1>=0)
      if(arr[i+1][j-1]==1)
        s++;
  }
  if(j+1<c)
    if(arr[i][j+1]==1 )
      s++;
  if(i-1>=0) {   
    if(arr[i-1][j]==1)
      s++;
    if(j-1>=0)
      if(arr[i-1][j-1]==1)
        s++;
    if(j+1<c)
      if(arr[i-1][j+1]==1)
        s++;
  }
  if(j-1>=0)
      if(arr[i][j-1]==1)
      s++;
  return s; 
}
function Arr(r,c){
  let arr= new Array(r);
  //for(var k=0; k<gen ; k++)
    for(var i=0;i<r;i++ ){
      arr[i]=new Array(c);
    }
  return arr; 
}
let w=580,gen; 
let d=10 ,r=w/d,c=w/d; //d cote du carré
function setup() {
  createCanvas(w, w);
  gen=0; 
  arr= Arr(r,c);
  arr2= Arr(r,c);
  for(var i=0;i<r;i++ ){
    for(var j=0; j<c;j++){
      arr[i][j]=floor(random(2));
      //arr[i][j]=0; 
    }
  }
  //arr[4][4]=1; 
  //arr[4][5]=1; 
  //arr[4][6]=1; 
  for(var i=0;i<r;i++ )
    for(var j=0; j<c;j++)
      arr2[i][j]=arr[i][j];
}

function draw() {
  gen++;
  sleep(100);
  background(0);
  if(gen%2==1){
    for(var i=0;i<r;i++ ){
      for(var j=0; j<c;j++){
        if(arr[i][j]==1){
          fill(255);
          rect(i*d,j*d,d,d);
        }
      }      
    }
    
    for(var i=0;i<r;i++ ){
      for(var j=0; j<c;j++){
        if(arr[i][j]==1 && (numOfNeigh(arr,i,j)>3 || numOfNeigh(arr,i,j)<2))
          arr2[i][j]=0;
        if(arr[i][j]==0 && numOfNeigh(arr,i,j)==3)
          arr2[i][j]=1; 
          
      }
    }

    for(var i=0;i<r;i++ )
      for(var j=0; j<c;j++)
        arr [i][j]=arr2[i][j];
  }else{
    for(var i=0;i<r;i++ ){
      for(var j=0; j<c;j++){
        if(arr2[i][j]==1){
          fill(255);
          rect(i*d,j*d,d,d);
        }
      }      
    }
    
    for(var i=0;i<r;i++ ){
        for(var j=0; j<c;j++){
          if(arr2[i][j]==1 && (numOfNeigh(arr2,i,j)>3 || numOfNeigh(arr2,i,j)<2))
            arr[i][j]=0;
          else if(arr2[i][j]==0 && numOfNeigh(arr2,i,j)==3)
            arr[i][j]=1; 
          
      }
    }
    for(var i=0;i<r;i++ )
      for(var j=0; j<c;j++)
        arr2[i][j]=arr[i][j];

  }
}
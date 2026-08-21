function preprocess(code){
return code
.replace(/\/\/.*$/gm,"")
.replace(/\/\*[\s\S]*?\*\//g,"")
.replace(/\s+/g," ")
.trim()
.toLowerCase();
}

function lcs(a,b){
let m=a.length;
let n=b.length;
let dp=new Array(m+1);

for(let i=0;i<=m;i++){
dp[i]=new Array(n+1).fill(0);
}

for(let i=1;i<=m;i++){
for(let j=1;j<=n;j++){
if(a[i-1]==b[j-1])
dp[i][j]=dp[i-1][j-1]+1;
else
dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
}
}

return dp[m][n];
}

function getLanguage(fileName){
const ext=fileName.split('.').pop().toLowerCase();
const supported={
"java":"Java",
"py":"Python",
"cpp":"C++",
"c":"C",
"js":"JavaScript",
"ts":"TypeScript",
"cs":"C#",
"go":"Go"
};

return supported[ext] || null;
}

function compareFiles(){
let file1=document.getElementById("file1").files[0];
let file2=document.getElementById("file2").files[0];

if(!file1||!file2){
alert("Please upload both files");
return;
}

const lang1=getLanguage(file1.name);
const lang2=getLanguage(file2.name);

if(!lang1||!lang2){
alert("Unsupported programming language");
return;
}

if(lang1!==lang2){
alert("Both files must be in the same programming language");
return;
}

let reader1=new FileReader();
let reader2=new FileReader();

reader1.onload=function(e1){
reader2.onload=function(e2){
let code1=preprocess(e1.target.result);
let code2=preprocess(e2.target.result);
let length=lcs(code1,code2);
let similarity=(2*length/(code1.length+code2.length))*100;
let bar=document.getElementById("progressBar");
bar.style.width=similarity+"%";

let level="Low";
let className="low";

if(similarity>70){
level="High";
className="high";
}
else if(similarity>30){
level="Medium";
className="medium";
}

document.getElementById("result").innerHTML=
`Similarity: ${similarity.toFixed(2)}%
<span class="badge ${className}">${level}</span>`;
};

reader2.readAsText(file2);
};

reader1.readAsText(file1);
}
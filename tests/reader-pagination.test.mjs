import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
const source=await fs.readFile(new URL('../docs/reader/reader.js',import.meta.url),'utf8');
const extract=name=>source.match(new RegExp('function '+name+'\\([^]*?\\n\\}'))[0];
test('HTML progress and navigation count source pages instead of viewport heights',()=>{
 const stage={scrollTop:0,scrollHeight:2800,clientHeight:700,getBoundingClientRect:()=>({top:0}),scrollBy(){throw Error('Screen scrolling must not replace source page navigation');}};
 let destination;
 const pages=[0,1,2].map(i=>({getBoundingClientRect:()=>({top:10+i*900-stage.scrollTop}),scrollIntoView:()=>{destination=i;}}));stage.querySelectorAll=()=>pages;
 const context={stage,state:{type:'html',htmlFrame:null},updateReadingProgress:(position,page,total)=>({position,page,total})};vm.createContext(context);vm.runInContext(extract('updateHtmlProgress')+'\n'+extract('turnReadingPage'),context);
 assert.equal(vm.runInContext('updateHtmlProgress(0).total',context),3);
 vm.runInContext('turnReadingPage(1)',context);assert.equal(destination,1);
 stage.scrollTop=900;assert.equal(vm.runInContext('updateHtmlProgress(.4).page',context),2);
 vm.runInContext('turnReadingPage(-1)',context);assert.equal(destination,0);
});

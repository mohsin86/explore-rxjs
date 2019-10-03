import $ from 'jquery';
import Rx from 'rxjs/Rx';

console.log('RxJS Boiler Running...');

const btn = $('#btn');

const clickStream$ = Rx.observable.fromEvent(btn,'click');

clickStream$.subscribe((e)=>{
    console.log(e.target.innerHTML);
},(err)=>{
    console.log(err);
},()=>{
    console.log('complete');
});

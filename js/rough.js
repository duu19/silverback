import { annotate } from 'https://unpkg.com/rough-notation?module';

const n1 = document.querySelector('#tittleSB');
const a1 = annotate(n1, { type: 'highlight', color: '#631f63', padding: 10 });

const n2 = document.querySelector('#draw');
const a2 = annotate(n2, { type: 'box', color: '#631f63', padding: 5 });

const n3 = document.querySelector('#draw2');
const a3 = annotate(n3, { type: 'underline', color: '#631f63', padding: 0 });

const n4 = document.querySelector('#draw3');
const a4 = annotate(n4, { type: 'underline', color: '#631f63', padding: 0 });

const n5 = document.querySelector('#cardsRough1');
const a5 = annotate(n5, { type: 'box', color: '#631f53', padding: 0 });

const n6 = document.querySelector('#cardsRough2');
const a6 = annotate(n6, { type: 'box', color: '#631f53', padding: 0 });

const n7 = document.querySelector('#cardsRough3');
const a7 = annotate(n7, { type: 'box', color: '#631f53', padding: 0 });

a1.show();
a2.show();
a3.show();
a4.show();
a5.show();
a6.show();
a7.show();

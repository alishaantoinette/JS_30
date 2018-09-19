'use strict';

const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
context.strokeStyle = 'green';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 8;


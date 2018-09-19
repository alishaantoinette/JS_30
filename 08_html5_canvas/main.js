'use strict';

const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
context.strokeStyle = 'green';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 8;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = e => {
  if(!isDrawing) return;
  console.log({ e });
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
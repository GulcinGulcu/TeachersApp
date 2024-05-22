import { fabric } from 'fabric';
import { useRef, useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { Button } from '../../components/Button';
import { MdOutlineColorLens } from 'react-icons/md';
import './styles.css';

export const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [penWidth, setPenWidth] = useState(3);
  const [fabricCanvas, setFabricCanvas] = useState();
  const [penColor, setPenColor] = useState('#000');
  const [toggleEraser, setToggleEraser] = useState(false);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: 'white',
      isDrawingMode: true,
    });

    canvas.setDimensions({ width: '100%', height: '32rem' }, { cssOnly: true });
    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, [canvasRef]);

  const changePenWidth = (width) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = width;
      setPenWidth(width);
      fabricCanvas.renderAll.bind(fabricCanvas);
    }
  };

  const changePenColor = (color) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = color;
      setPenColor(color);
      fabricCanvas.renderAll.bind(fabricCanvas);
    }
  };

  const handleDownload = () => {
    const pngData = fabricCanvas.toDataURL('png');
    const downloadLink = document.createElement('a');
    const fileName = `whiteboard-session-${Math.random()
      .toString()
      .replace('.', '')}.png`;
    downloadLink.href = pngData;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const handleClear = () => {
    if (fabricCanvas) {
      fabricCanvas.clear();
      fabricCanvas.backgroundColor = 'white';
    }
  };

  const handleErase = () => {
    if (fabricCanvas) {
      if (toggleEraser) {
        changePenColor('black');
        setToggleEraser(false);
      } else {
        changePenColor('white');
        setToggleEraser(true);
      }
    }
  };
  return (
    <div>
      <div className='canvas__toolkit'>
        <div className='canvas__pens'>
          <div className='canvas__pen'>
            <label>
              <FaPencilAlt /> Pen Width - {penWidth}
            </label>
            <input
              type='range'
              min={1}
              max={30}
              value={penWidth}
              onChange={(e) => changePenWidth(e.target.value)}
            />
          </div>
          <div className='canvas__pen-color'>
            <label>
              <MdOutlineColorLens /> Color
            </label>
            <input
              type='color'
              value={penColor}
              onChange={(e) => changePenColor(e.target.value)}
            />
          </div>
        </div>
        <div className='canvas__btns'>
          <Button type='button' onClick={handleClear}>
            Clear
          </Button>
          <Button type='button' onClick={handleErase}>
            {toggleEraser ? 'Remove' : 'Use'} Eraser
          </Button>
          <Button type='button' onClick={handleDownload}>
            Download Board
          </Button>
        </div>
      </div>
      <div className='canvas-wrapper'>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

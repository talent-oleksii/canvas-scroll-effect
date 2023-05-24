import CanvasScrollClip from 'canvas-scroll-clip';
import React from 'react';

interface CanvasScrollClipSectionProps {
	framePath: string;
	frameCount: number;
	scrollArea: number;
}

const CanvasScrollClipSection = (props: CanvasScrollClipSectionProps) => {
	const ref = React.useRef<HTMLDivElement>(null); // add ref type
	React.useEffect(() => {
		console.log(props.scrollArea);
		if (ref.current) {
			new CanvasScrollClip(ref.current, {
				framePath: props.framePath,
				frameCount: props.frameCount,
				scrollArea: props.scrollArea,
			});
		}
	}, [ref, props]); // add ref to dependencies array
	return <div ref={ref}></div>;
};

function App() {
	const [framePath, setFramePath] = React.useState('assets/images/0001.jpg');
	const [frameCount, setFrameCount] = React.useState(10);
	const [scrollArea, setScrollArea] = React.useState(2000);
	const [updateFramePath, setUpdateFramePath] = React.useState('assets/images/0001.jpg');
	const [updateFrameCount, setUpdateFrameCount] = React.useState(10);
	const [updateScrollArea, setUpdateScrollArea] = React.useState(2000);

	const handleClickCheck = () => {
		setUpdateFramePath(framePath);
		setUpdateFrameCount(frameCount);
		setUpdateScrollArea(scrollArea);
	}
	
	const handleFramePathChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFramePath(event.target.value);
	};

	const handleFrameCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFrameCount(parseInt(event.target.value));
	};

	const handleScrollArea = (event: React.ChangeEvent<HTMLInputElement>) => {
		setScrollArea(parseInt(event.target.value));
	};

	return (
		<div style={{ width: '80%', margin: '0 auto' }}>
			<div style={{ width: 500, margin: '0 auto' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>Frame Path</div>
					<div>
						<input value={framePath} onChange={handleFramePathChange}></input>
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>Frame Count</div>
					<div>
						<input value={frameCount} onChange={handleFrameCountChange}></input>
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>Scroll Area</div>
					<div>
						<input value={scrollArea} onChange={handleScrollArea}></input>
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div>
						<button onClick={() => handleClickCheck()}>Check</button>
					</div>
				</div>
			</div>
			<CanvasScrollClipSection framePath={updateFramePath} frameCount={updateFrameCount} scrollArea={updateScrollArea} />
		</div>
	);
}

export default App;

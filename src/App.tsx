import React from 'react';
import CanvasScrollClip from 'canvas-scroll-clip';

function App() {
	const ref = React.useRef<HTMLDivElement>(null); // add ref type
	React.useEffect(() => {
		if (ref.current) {
			new CanvasScrollClip(ref.current, {
				framePath: 'assets/images/0001.jpg',
				frameCount: 10,
				scrollArea: 2000,
			});
		}
	}, [ref]); // add ref to dependencies array
	return <div style={{ width: '80%', margin: '0 auto' }} ref={ref}></div>;
}

export default App;

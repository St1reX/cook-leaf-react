import { useEffect } from 'react';

async function loadFlyonUI() {
  return import('flyonui/flyonui');
}

function App() {

  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  }, []);

  return (
    <>
    <ul className="timeline overflow-x-auto">
  <li>
    <div className="timeline-start text-base-content font-medium">1984</div>
    <div className="timeline-middle">
      <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
        <span className="badge badge-primary size-3 rounded-full p-0" />
      </span>
    </div>
    <div className="timeline-end timeline-box">Macintosh PC</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start text-base-content font-medium">1998</div>
    <div className="timeline-middle">
      <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
        <span className="badge badge-primary size-3 rounded-full p-0" />
      </span>
    </div>
    <div className="timeline-end timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start text-base-content font-medium">2001</div>
    <div className="timeline-middle">
      <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
        <span className="badge badge-primary size-3 rounded-full p-0" />
      </span>
    </div>
    <div className="timeline-end timeline-box">iPod</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start text-base-content font-medium">2007</div>
    <div className="timeline-middle">
      <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
        <span className="badge badge-primary size-3 rounded-full p-0" />
      </span>
    </div>
    <div className="timeline-end timeline-box">iPhone</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start text-base-content font-medium">2015</div>
    <div className="timeline-middle">
      <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
        <span className="badge badge-primary size-3 rounded-full p-0" />
      </span>
    </div>
    <div className="timeline-end timeline-box">Apple Watch</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start text-base-content font-medium">2024</div>
    <div className="timeline-middle">
      <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
        <span className="badge badge-primary size-3 rounded-full p-0" />
      </span>
    </div>
    <div className="timeline-end timeline-box">Vision Pro</div>
  </li>
</ul>
  </>
  

  );
}

export default App;
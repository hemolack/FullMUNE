import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const DownloadLog = (props) => {
    const [data, setData] = useState('');
    const log = props.story;

    useEffect(() => {
        if(log.length > 0) {
            setData(log.map((item) => `${item.type === 'q' ? '👥' : '💻'} ${item.text}`).join('\r\n'));
        }
        else {
            setData('');
        }
    }, [log]);

    const downloadFile = () => {
        const element = document.createElement('a');
        console.info(`data: ${data}`);
        const file = new Blob([`MUNE Session Ending ${new Date().toLocaleString('en-US')}\r\n${data}`], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "MUNE_log.txt";
        document.body.appendChild(element);
        element.click();
    }
    
    return <Button variant="danger" onClick={downloadFile}>Download</Button>
}

export default DownloadLog;
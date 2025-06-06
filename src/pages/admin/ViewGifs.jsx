import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CharmService from '../../services/charm.service';

const ViewGifs = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGifs = async () => {
    setLoading(true);
    try {
      const res = await CharmService.getAllGifs();
      setGifs(res || []);
    } catch {
      toast.error('Không thể tải GIF');
    }
    setLoading(false);
  };

  useEffect(() => { fetchGifs(); }, []);

  const handleDelete = async id => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa GIF này?')) return;
    try {
      await CharmService.deleteGif(id);
      toast.success('Đã xóa GIF!');
      fetchGifs();
    } catch {
      toast.error('Không thể xóa GIF!');
    }
  };

  return (
    <div className="view-gifs-container">
      <h1>Xem GIF</h1>
      {loading ? <div>Đang tải...</div> : (
        <div className="gif-list">
          {gifs.map(gif => (
            <div className="gif-item" key={gif.id}>
              <img src={gif.url} alt="gif" style={{maxWidth:100}} />
              <button onClick={()=>handleDelete(gif.id)}>Xóa</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewGifs; 
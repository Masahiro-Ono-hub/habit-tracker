// NFTプロフィールビルダー - フォーム画面（MVP）

import { useState } from 'react';

export default function NFTProfileBuilder() {
  const [form, setForm] = useState({
    name: '',
    bio: '',
    interests: ['', '', ''],
    tiktok: '',
    instagram: '',
    youtube: '',
    nftOptIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleInterestChange = (index, value) => {
    const newInterests = [...form.interests];
    newInterests[index] = value;
    setForm((prev) => ({ ...prev, interests: newInterests }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-xl font-bold mb-4">NFTプロフィール作成</h1>

      <label className="block mb-2">名前（ニックネーム）</label>
      <input name="name" className="w-full border p-2 mb-4" value={form.name} onChange={handleChange} />

      <label className="block mb-2">ひとこと紹介</label>
      <textarea name="bio" className="w-full border p-2 mb-4" value={form.bio} onChange={handleChange} maxLength={140} />

      <label className="block mb-2">推し or 好きなこと</label>
      {form.interests.map((val, i) => (
        <input
          key={i}
          className="w-full border p-2 mb-2"
          placeholder={`例：猫カフェ、BTS、Fortnite`}
          value={val}
          onChange={(e) => handleInterestChange(i, e.target.value)}
        />
      ))}

      <label className="block mt-4 mb-2">SNSリンク（任意）</label>
      <input name="tiktok" className="w-full border p-2 mb-2" placeholder="TikTok URL" value={form.tiktok} onChange={handleChange} />
      <input name="instagram" className="w-full border p-2 mb-2" placeholder="Instagram URL" value={form.instagram} onChange={handleChange} />
      <input name="youtube" className="w-full border p-2 mb-2" placeholder="YouTube URL" value={form.youtube} onChange={handleChange} />

      <div className="flex items-center mt-4">
        <input id="nftOptIn" name="nftOptIn" type="checkbox" checked={form.nftOptIn} onChange={handleChange} />
        <label htmlFor="nftOptIn" className="ml-2">このプロフィールをNFTで発行する</label>
      </div>

      <button onClick={handleSubmit} className="mt-6 w-full bg-blue-500 text-white p-2 rounded">
        公開する（仮）
      </button>
    </div>
  );
}

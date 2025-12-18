
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, EDUCATION_HISTORY, PROJECTS, PUBLICATIONS, PHOTOGRAPHY, SOCIAL_LINKS, FAVORITE_ALBUMS } from './constants';
import { getAssetPath } from './utils';

const App: React.FC = () => {
  const [welcomeMessage] = useState<string>("Welcome to my Official Digital Portal!");
  const [contactText, setContactText] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [expandedCountries, setExpandedCountries] = useState<Record<string, boolean>>({ "Switzerland": true });
  const [expandedContinents, setExpandedContinents] = useState<Record<string, boolean>>({ 
    "China": true, 
    "Switzerland": true,
    "Europe": false,
    "Asia": false,
    "North America": false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactText.trim()) return;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Message from Portal Reader&body=${encodeURIComponent(contactText)}`;
    window.location.href = mailtoUrl;
    setContactText("");
  };

  const toggleCountry = (country: string) => {
    setExpandedCountries(prev => ({
      ...prev,
      [country]: !prev[country]
    }));
  };

  const toggleContinent = (continent: string) => {
    setExpandedContinents(prev => ({
      ...prev,
      [continent]: !prev[continent]
    }));
  };

  // Group countries by continent
  const continentGroups = [
    { name: "China", countries: ["China"] },
    { name: "Switzerland", countries: ["Switzerland"] },
    { name: "Europe", countries: ["Denmark", "Germany", "France", "Hungary"] },
    { name: "Asia", countries: ["Japan"] },
    { name: "North America", countries: ["USA"] }
  ];

  return (
    <div className="max-w-[1000px] mx-auto bg-white min-h-screen shadow-lg retro-border flex flex-col">
      {/* Top Banner */}
      <header className="header-bg p-4 flex justify-between items-center text-white border-b-4 border-red-600">
        <div className="flex items-center space-x-4">
          <div className="bg-red-600 p-2 text-2xl font-bold tracking-tighter">SHEN</div>
          <div>
            <h1 className="text-xl font-bold uppercase">Digital Humanities & Artificial Intelligence</h1>
            <p className="text-[10px] italic">I learn, therefore I am.</p>
          </div>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-sm font-bold">{currentDate}</div>
          <div className="text-[10px]">Beijing | Lausanne</div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="nav-bg py-1 px-4 flex flex-wrap gap-4 text-[#004276] font-bold">
        <a href="#" className="hover:text-red-600 border-r border-gray-400 pr-4">HOME</a>
        <a href="#edu" className="hover:text-red-600 border-r border-gray-400 pr-4">EDUCATION</a>
        <a href="#projects" className="hover:text-red-600 border-r border-gray-400 pr-4">PROJECTS</a>
        <a href="#academic" className="hover:text-red-600 border-r border-gray-400 pr-4">ACADEMIC</a>
        <a href="#gallery" className="hover:text-red-600 border-r border-gray-400 pr-4">GALLERY</a>
        <a href={getAssetPath(PERSONAL_INFO.resumeUrl)} className="text-red-700 hover:underline">CV [PDF]</a>
      </nav>

      {/* Marquee Area */}
      <div className="bg-[#fff9e6] border-b border-gray-300 py-1 px-2 flex">
        <span className="text-red-600 font-bold shrink-0 mr-2">[BREAKING]</span>
        <div className="marquee-container w-full">
          <div className="marquee-text text-[#333] font-bold">
            {welcomeMessage} -- UPDATED: New paper accepted at ACL 2025 Demo! -- EPFL Digital Humanities Master program in progress...
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="flex-1 grid grid-cols-12 gap-4 p-4">
        
        {/* Left Column: Sidebar (3/12) */}
        <aside className="col-span-12 md:col-span-3 space-y-4">
          {/* Profile Card */}
          <div className="retro-border">
            <div className="section-title">PORTRAIT</div>
            <div className="p-2 text-center">
              <img src={getAssetPath(PERSONAL_INFO.avatar)} alt="Avatar" className="w-32 h-100 mx-auto border border-gray-400 grayscale contrast-125 mb-2" />
              <div className="font-bold text-red-700">{PERSONAL_INFO.name}</div>
              <div className="text-[10px] text-gray-600">{PERSONAL_INFO.title}</div>
            </div>
          </div>

          {/* Social Connect Section */}
          <div className="retro-border">
            <div className="section-title">SOCIAL CONNECT</div>
            <ul className="p-2 space-y-1 text-[#004276]">
              {SOCIAL_LINKS.map((link, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-[10px] mr-1">▶</span>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="news-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Music Recommendations Section */}
          <div className="retro-border">
            <div className="section-title flex justify-between">
              <span>MUSIC CHARTS</span>
              <span className="text-[8px] text-red-600 animate-blink font-bold">NEW!</span>
            </div>
            <div className="p-2 space-y-2">
              {FAVORITE_ALBUMS.map((album, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0 pb-1">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold bg-[#004276] text-white px-1">{idx + 1}</span>
                    <span className="text-[11px] font-bold truncate text-[#333]">{album.title}</span>
                  </div>
                  <div className="flex justify-between items-center mt-0.5">
                    <span className="text-[9px] text-gray-500 italic ml-4">{album.artist}</span>
                    <span className={`text-[8px] font-bold px-1 ${album.status === 'HOT' ? 'bg-red-600 text-white animate-blink' : 'bg-yellow-400 text-black'}`}>
                      {album.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Links */}
          <div className="retro-border">
            <div className="section-title">TOP CHANNELS</div>
            <ul className="p-2 space-y-1 text-[#004276]">
              <li className="flex items-center"><span className="text-[8px] mr-1">■</span> <a href="#" className="news-link">Campus Life</a></li>
              <li className="flex items-center"><span className="text-[8px] mr-1">■</span> <a href="#" className="news-link">Tech Review</a></li>
              <li className="flex items-center"><span className="text-[8px] mr-1">■</span> <a href="#" className="news-link">Artistic Trends</a></li>
              <li className="flex items-center"><span className="text-[8px] mr-1">■</span> <a href="#" className="news-link">Global News</a></li>
            </ul>
          </div>

          {/* Contact Center - Replaces Hit Counter */}
          <div className="retro-border">
            <div className="section-title flex justify-between">
              <span>CONTACT OFFICE</span>
              <span className="text-[8px] animate-blink text-red-600 font-bold">LIVE</span>
            </div>
            <form onSubmit={handleSendEmail} className="p-2 bg-[#f9f9f9]">
              <div className="text-[10px] text-gray-600 mb-1">Leave a message for the Editor:</div>
              <textarea 
                className="w-full h-16 text-[11px] border border-gray-400 p-1 resize-none bg-white font-serif outline-none focus:border-[#004276]"
                placeholder="Write your comments here..."
                value={contactText}
                onChange={(e) => setContactText(e.target.value)}
              />
              <button 
                type="submit"
                className="w-full mt-1 bg-gray-200 border border-gray-400 hover:bg-gray-300 text-[10px] font-bold py-1 transition-colors"
              >
                SUBMIT BROADCAST
              </button>
              <div className="mt-2 text-center">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="text-[9px] text-[#004276] underline hover:text-red-600"
                >
                  Direct Email Inquiry
                </a>
              </div>
            </form>
          </div>
        </aside>

        {/* Center/Main Column (9/12) */}
        <section className="col-span-12 md:col-span-9 space-y-6">
          
          {/* Biography Headlines */}
          <div className="border-b-2 border-dashed border-gray-300 pb-4">
            <h2 className="text-2xl font-bold text-red-700 mb-2 border-b border-red-700 pb-1 flex justify-between items-center">
              <span>Jiajun Shen</span>
              <span className="text font-bold">/tɕja55 tɕyn51 ʂən21˦/</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              [About Me] {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education - Two Columns Style */}
          <div id="edu">
            <div className="section-title">EDUCATIONAL BACKGROUND</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <div key={idx} className="retro-border p-3 bg-[#f9f9f9]">
                  <div className="text-red-700 font-bold underline mb-1">{edu.institution}</div>
                  <div className="font-bold text-sm text-[#004276]">{edu.degree} in {edu.major}</div>
                  <div className="text-[10px] text-gray-500 italic mb-2">{edu.period}</div>
                  <p className="text-[11px] leading-tight">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects - News with Thumbnails */}
          <div id="projects">
            <div className="section-title">EXCLUSIVE PROJECT REPORTS</div>
            <div className="space-y-4 mt-2">
              {PROJECTS.map((proj, idx) => {
                // 如果是本地文件（不以 http 开头），使用 getAssetPath
                const projectUrl = proj.url.startsWith('http') ? proj.url : getAssetPath(proj.url);
                return (
                  <div key={idx} className="flex gap-4 border-b border-gray-200 pb-4">
                    <img src={getAssetPath(proj.thumbnail)} alt={proj.title} className="w-40 h-24 object-cover border border-gray-400 shadow-sm shrink-0" />
                    <div>
                      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#004276] hover:text-red-600 underline">
                        {proj.title}
                      </a>
                      <div className="text-[10px] text-gray-500 mb-1">Release Date: {proj.date} | Category: Interactive Report</div>
                      <p className="text-[12px]">{proj.description}</p>
                      <a href={projectUrl} className="text-red-600 font-bold text-[10px] hover:underline">[Read Detailed Report {'>>'}]</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Papers - Bulletin Board Style */}
          <div id="academic">
            <div className="section-title">ACADEMIC JOURNALS & PUBLICATIONS</div>
            <div className="mt-2 bg-[#f0f5ff] p-4 border border-[#ccddee]">
              <ul className="list-disc list-inside space-y-3">
                {PUBLICATIONS.map((pub, idx) => (
                  <li key={idx} className="border-b border-white pb-2 last:border-0">
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[#004276] hover:underline">
                      {pub.title}
                    </a>
                    <div className="text-[11px] text-[#555]">
                      <span className="font-bold">Authors:</span> {pub.authors} | <span className="font-bold">Venue:</span> {pub.venue} ({pub.year})
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Photo Gallery - Categorized & Expandable style */}
          <div id="gallery">
            <div className="section-title">VISUAL NEWS: MOMENTS THROUGH THE LENS</div>
            <div className="mt-2 space-y-3">
              {continentGroups.map(continent => {
                const continentPhotos = PHOTOGRAPHY.filter(p => continent.countries.includes(p.country));
                if (continentPhotos.length === 0) return null;
                
                return (
                  <div key={continent.name} className="border-2 border-gray-300 shadow-sm">
                    {/* Continent Header - Toggle */}
                    <button 
                      onClick={() => toggleContinent(continent.name)}
                      className="w-full bg-[#e8e8e8] border-b-2 border-gray-400 text-left px-3 py-2 flex justify-between items-center hover:bg-gray-300 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-red-600 font-bold">
                          {expandedContinents[continent.name] ? '▼' : '▶'}
                        </span>
                        <span className="text-[14px] font-bold text-[#004276] uppercase tracking-wide">
                          {continent.name}
                        </span>
                        <span className="text-[9px] text-gray-500 font-mono">
                          [{continentPhotos.length} PHOTOS]
                        </span>
                      </div>
                      <span className="text-[10px] text-red-600 font-bold underline">
                        {expandedContinents[continent.name] ? 'COLLAPSE' : 'EXPAND'}
                      </span>
                    </button>
                    
                    {/* Countries in this continent */}
                    {expandedContinents[continent.name] && (
                      <div className="bg-white p-2 space-y-2">
                        {/* For China and Switzerland, show photos directly without country toggle */}
                        {(continent.name === "China" || continent.name === "Switzerland") ? (
                          <div className="p-3 bg-white grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {continentPhotos.map((photo, idx) => (
                              <div key={idx} className="text-center group">
                                <div className="border border-gray-300 p-1 bg-white shadow-sm hover:shadow-md transition-shadow">
                                  <img src={getAssetPath(photo.url)} alt={photo.caption} className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="bg-gray-100 mt-1 py-1 text-[9px] font-bold text-gray-700 truncate px-1">
                                  {photo.caption}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* For other continents, show countries with toggles */
                          continent.countries.map(country => {
                            const countryPhotos = PHOTOGRAPHY.filter(p => p.country === country);
                            if (countryPhotos.length === 0) return null;
                            
                            return (
                              <div key={country} className="border border-gray-200 shadow-sm overflow-hidden">
                                <button 
                                  onClick={() => toggleCountry(country)}
                                  className="w-full bg-[#f7f7f7] text-left px-3 py-2 flex justify-between items-center hover:bg-gray-200 transition-colors border-b border-gray-100"
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="text-[14px] font-bold text-[#004276]">
                                      {expandedCountries[country] ? '▼' : '▶'} {country.toUpperCase()}
                                    </span>
                                    <span className="text-[9px] text-gray-500 font-mono">[{countryPhotos.length} PHOTOS]</span>
                                  </div>
                                  <span className="text-[10px] text-red-600 font-bold underline">
                                    {expandedCountries[country] ? 'COLLAPSE' : 'EXPAND'}
                                  </span>
                                </button>
                                
                                {expandedCountries[country] && (
                                  <div className="p-3 bg-white grid grid-cols-2 sm:grid-cols-4 gap-2 animate-fadeIn">
                                    {countryPhotos.map((photo, idx) => (
                                      <div key={idx} className="text-center group">
                                        <div className="border border-gray-300 p-1 bg-white shadow-sm hover:shadow-md transition-shadow">
                                          <img src={getAssetPath(photo.url)} alt={photo.caption} className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                        </div>
                                        <div className="bg-gray-100 mt-1 py-1 text-[9px] font-bold text-gray-700 truncate px-1">
                                          {photo.caption}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </section>
      </main>

      {/* Footer Area */}
      <footer className="bg-[#f2f2f2] border-t-2 border-[#004276] p-6 text-center text-[11px] text-gray-600 mt-8">
        <div className="mb-2">
          <a href="#" className="hover:underline">About SJJ</a> | 
          <a href="#" className="hover:underline ml-2">Contact Portal</a> | 
          <a href="#" className="hover:underline ml-2">Copyright Statement</a> | 
          <a href="#" className="hover:underline ml-2">Advertise With Us</a> | 
          <a href="#" className="hover:underline ml-2">Sitemap</a>
        </div>
        <div>
          Copyright &copy; 2005-2025 SJJ Information Network Center. All Rights Reserved.
        </div>
        <div className="mt-2 text-red-800 font-bold">
          Empowered by Artificial Intelligence & Digital Humanities.
        </div>
      </footer>
    </div>
  );
};

export default App;

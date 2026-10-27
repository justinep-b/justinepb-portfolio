'use client';
import {useEffect,useMemo,useState} from 'react';
import {MessageCircle,Send,ArrowRight,ArrowUpRight,BriefcaseBusiness,Check,ChevronRight,ExternalLink,FileText, Github, LayoutGrid, Mail, Menu, Moon, Play, Search, Sparkles, Sun, X} from 'lucide-react';
import {categories, projects, skillGroups, type Project} from './data';
import profilePhoto from './justine-profile.png';

type Tab = 'Home'|'Projects'|'Skills'|'Client Testimonials'|'About'|'Contact';
const categoryIntroductions: Record<string,string> = {
  'All': "A little bit of everything I do, from creative production and YouTube channel management to marketing systems, AI-supported workflows, and the behind-the-scenes operations that keep projects moving.",
  'Graphic Design': "I started creating YouTube thumbnails and graphics with Canva in 2022. That creative foundation still shapes how I approach branding, visuals, and communication today.",
  'Digital Marketing': "A client once saw potential in me beyond video editing and pushed me into email copywriting. That challenge opened the door to funnels, CRM work, automation, and broader marketing support.",
  'AI & Content Creation': "I use AI to make creative and operational workflows more efficient, not to replace careful human judgment. My focus is practical systems, clearer workflows, and human quality control.",
  'Scriptwriting': "My writing experience spans long-form YouTube scripts, short-form video content, and collaborative storytelling. I research, shape hooks, and adapt structure and voice to different channels and formats.",
  'YouTube Management': "I started with thumbnails, then expanded into scriptwriting, research, channel management, publishing support, and content operations. I understand both the creative output and the backend workflow behind it.",
  'Operations & Project Management': "As my role grew, I took on more behind-the-scenes responsibility: keeping tasks organized, spotting issues early, supporting people, and building clearer systems so projects keep moving with less friction."
};
const toolGroups = [
 {name:'Marketing & CRM',items:['GoHighLevel','ActiveCampaign','Meta','Make']},
 {name:'AI & Development',items:['Claude Code','Claude','ChatGPT','Gemini','GitHub','Vercel','Supabase']},
 {name:'Content & Design',items:['Canva','CapCut','YouTube Studio','vidIQ','TubeBuddy']},
 {name:'Operations & Teams',items:['Google Workspace','Trello','ClickUp','Slack','Asana','Heartbeat']}
];
const toolUses: Record<string,{description:string;examples:string[];category:string}> = {
 'GoHighLevel':{description:'CRM, client funnels, community, and operational systems.',examples:['Client onboarding workflows and resource delivery','VA community and portal setup','Funnel pages, forms, and workflow automations'],category:'Digital Marketing'},
 'ActiveCampaign':{description:'Email marketing and contact management.',examples:['Email copy and campaign coordination','Subscriber organization and email workflows'],category:'Digital Marketing'},
 'Meta':{description:'Supporting paid-social campaigns and marketing funnels.',examples:['Ad creative and copy support','Campaign setup and funnel coordination'],category:'Digital Marketing'},
 'Make':{description:'Connecting tools and reducing repetitive work through automation.',examples:['Workflow automation support','Helping systems pass information between steps'],category:'Digital Marketing'},
 'Claude Code':{description:'Building and improving practical portals and internal systems with human review.',examples:['Team onboarding, offboarding, and task portal','Client portal navigation and onboarding automation'],category:'AI & Content Creation'},
 'Claude':{description:'AI-assisted writing, planning, and problem-solving.',examples:['Draft and workflow support','Iterating on ideas while checking the output manually'],category:'AI & Content Creation'},
 'ChatGPT':{description:'AI-supported brainstorming, content, and process work.',examples:['Content research and ideation','Drafting and organizing workflows with human QC'],category:'AI & Content Creation'},
 'Gemini':{description:'AI-assisted research and content workflows.',examples:['Exploring options and content ideas','Reviewing and refining draft material'],category:'AI & Content Creation'},
 'GitHub':{description:'Managing source files and updates for web projects.',examples:['Versioning website project files','Publishing updates through a connected deployment workflow'],category:'AI & Content Creation'},
 'Vercel':{description:'Deploying and hosting web projects.',examples:['Publishing portfolio and website builds','Connecting a deployment to GitHub'],category:'AI & Content Creation'},
 'Supabase':{description:'Backend platform used within web and portal workflows.',examples:['Supporting database-backed app builds','Connecting web experiences to backend services'],category:'AI & Content Creation'},
 'Canva':{description:'Graphic design and visual content creation.',examples:['YouTube thumbnails and graphics','Ad visuals and social creatives'],category:'Graphic Design'},
 'CapCut':{description:'Short-form video editing and production.',examples:['Basic Shorts and Reels editing','Captions, pacing, and video assembly'],category:'YouTube Management'},
 'YouTube Studio':{description:'Publishing, coordinating, and reviewing channel content.',examples:['Video publishing and scheduling','Titles, metadata, and channel operations'],category:'YouTube Management'},
 'vidIQ':{description:'YouTube topic and content research.',examples:['Video topic research','Supporting SEO and channel planning'],category:'YouTube Management'},
 'TubeBuddy':{description:'YouTube optimization and content research.',examples:['Research and keyword workflows','Support for publishing and optimization'],category:'YouTube Management'},
 'Google Workspace':{description:'Documents, spreadsheets, Drive, and day-to-day collaboration.',examples:['Shared planning and trackers','Content documents and team coordination'],category:'Operations & Project Management'},
 'Trello':{description:'Board-based task and production management.',examples:['Task tracking','Project handoffs and status visibility'],category:'Operations & Project Management'},
 'ClickUp':{description:'Task and project coordination.',examples:['Organizing assignments and workflows','Tracking deliverables and responsibilities'],category:'Operations & Project Management'},
 'Slack':{description:'Team communication and coordination.',examples:['Project updates and handoffs','Following up on team priorities'],category:'Operations & Project Management'},
 'Asana':{description:'Projects, tasks, and milestone tracking.',examples:['Coordinating timelines','Keeping work visible to collaborators'],category:'Operations & Project Management'},
 'Heartbeat':{description:'Community and member experience workflows.',examples:['Helping organize member spaces','Supporting community operations'],category:'Operations & Project Management'}
};
const faq = [
 {q:'What can you help my team with?',a:'I work across operations, project coordination, YouTube content, marketing, funnels, and AI-assisted workflows. My strongest fit is a role where creative execution and organized systems meet.',links:[{text:'Explore projects',tab:'Projects'},{text:'View skills',tab:'Skills'}]},
 {q:'What experience do you have with operations?',a:'I have coordinated teams, led daily stand-ups, supported VA placement, tracked tasks, and helped build onboarding and offboarding systems. I also built an internal task portal using Claude Code.',links:[{text:'Operations projects',category:'Operations & Project Management'},{text:'AI projects',category:'AI & Content Creation'}]},
 {q:'Can you manage YouTube channels?',a:'Yes. I started with thumbnails, then expanded into scripts, content research, channel management, publishing support, and short-form production. You can explore the public channel references.',links:[{text:'YouTube projects',category:'YouTube Management'}]},
 {q:'Do you build funnels and automations?',a:'I have worked with GoHighLevel, landing page funnels, CRM setup, client onboarding, and automated resource delivery. I keep human quality checks in the process.',links:[{text:'Marketing projects',category:'Digital Marketing'},{text:'AI projects',category:'AI & Content Creation'}]},
 {q:'Which tools do you use?',a:'My toolkit includes GoHighLevel, ActiveCampaign, Canva, Claude Code, ChatGPT, Gemini, Google Workspace, Meta, YouTube Studio, GitHub, Vercel, and project management tools. You can click any tool on the Skills page to see where I use it.',links:[{text:'See tools',tab:'Skills'}]},
 {q:'Can I see client feedback?',a:'Yes. John Coburn recorded a founder testimonial describing my work across marketing, operations, team coordination, and adaptability.',links:[{text:'Watch the testimonial',url:'https://www.loom.com/share/22b3f8dc24cb4aec8917499fe8c15037'}]},
 {q:'How can I hire or contact Justine?',a:'You can email Justine directly at justinebermillo@gmail.com. If you arrived through a job application, you can also reply in the same application thread to keep the conversation together.',links:[{text:'Email Justine',url:'mailto:justinebermillo@gmail.com'},{text:'View résumé',url:'https://drive.google.com/file/d/19eFZQfIwo5Lc7VF0engovjzzT1oxjE0X/view'}]}
];
const evidence = [
  'john-feedback-01.jpg','john-feedback-02.jpg','john-feedback-03.jpg','john-feedback-04.jpg','john-feedback-05.jpg','john-feedback-06.jpg','john-feedback-07.jpg','john-feedback-08.jpg','john-feedback-09.jpg','john-feedback-10.jpg','john-feedback-11.jpg','john-feedback-12.jpg'
].map(name=>({src:'/proof/'+name,title:'John Coburn · Client feedback'})).concat([{src:'/proof/jennifer-feedback.jpg',title:'Jennifer Forrest · Channel management feedback'}]);

function ProjectCard({project,onOpen}:{project:Project;onOpen:(p:Project)=>void}) {
  return <button className="project-card" onClick={()=>onOpen(project)} aria-label={'Open '+project.title}>
    <div className={'project-art '+project.art}>
      {project.video ? <video className="project-card-video" src={project.video} muted autoPlay loop playsInline preload="metadata" aria-label={project.title+' sped-up preview'}/> : project.image ? <img src={project.image} alt={project.title} onError={e=>{e.currentTarget.style.display='none'}} /> : <div className="art-decoration"><div className="art-orbit"/><div className="art-circle"/><span className="art-word">{project.category==='Graphic Design'?'DESIGN':project.category==='Scriptwriting'?'STORIES':project.category==='Digital Marketing'?'SYSTEMS':project.category==='Operations & Project Management'?'OPERATIONS':project.category==='AI & Content Creation'?'CREATE':'CHANNELS'}</span></div>}
      <span className="art-play"><Play size={18} fill="currentColor"/></span>
    </div>
    <div className="project-copy"><div className="project-bullet">J</div><div><h3>{project.title}</h3><p>{project.subtitle}</p><span className="project-mini">{project.tags.slice(0,2).join(' · ')}</span></div></div>
  </button>
}

function SectionHeading({title,caption,action}:{title:string;caption:string;action?:()=>void}){
  return <div className="section-heading"><div><h2>{title}</h2><p>{caption}</p></div>{action&&<button onClick={action}>View all <ArrowRight size={15}/></button>}</div>
}

export default function Page(){
  const [tab,setTab]=useState<Tab>('Home');
  const [category,setCategory]=useState('All');
  const [search,setSearch]=useState('');
  const [selected,setSelected]=useState<Project|null>(null);
  const [mobileOpen,setMobileOpen]=useState(false);
  const [activeTool,setActiveTool]=useState<string|null>(null);
  const [chatOpen,setChatOpen]=useState(false);
  const [faqIndex,setFaqIndex]=useState<number|null>(null);
  const [theme,setTheme]=useState<'dark'|'light'>('dark');

  useEffect(()=>{
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('justine-theme') : null;
    if(saved==='light' || saved==='dark') setTheme(saved);
  },[]);
  useEffect(()=>{
    if(typeof window !== 'undefined') window.localStorage.setItem('justine-theme',theme);
  },[theme]);

  const filtered=useMemo(()=>projects.filter(p=>(category==='All'||p.category===category)&&[p.title,p.category,p.subtitle,p.details,...p.tags].join(' ').toLowerCase().includes(search.toLowerCase())),[category,search]);
  function nav(t:Tab){setTab(t);setMobileOpen(false);setSelected(null);if(t==='Projects')setCategory('All');window.scrollTo({top:0,behavior:'smooth'});}

  return <div className={theme==='light'?'theme-light':'theme-dark'}>
    <header className="topbar">
      <div className="top-left"><button className="icon-btn menu-toggle" aria-label={mobileOpen?"Close sidebar":"Open sidebar"} onClick={()=>setMobileOpen(!mobileOpen)}><Menu size={20}/></button><button className="wordmark" onClick={()=>nav('Home')}><span className="wordmark-icon"><Play size={15} fill="white"/></span><span>justine<span className="accent">.studio</span></span></button></div>
      <div className="top-search"><Search size={17}/><input value={search} onChange={e=>{setSearch(e.target.value);if(e.target.value)setTab('Projects')}} placeholder="Search projects, skills, work..." aria-label="Search projects"/><span>⌘ K</span></div>
      <div className="top-actions">
        <button className="theme-toggle" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label="Toggle color theme">{theme==='dark'?<><Sun size={16}/> Light</>:<><Moon size={16}/> Dark</>}</button>
        <a className="github-top" href="https://github.com/justinep-b" target="_blank" rel="noreferrer"><Github size={18}/><span>GitHub</span><ArrowUpRight size={15}/></a>
      </div>
    </header>

    <aside className={'sidebar '+(mobileOpen?'sidebar-open':'')}><p className="sidebar-kicker">EXPLORE</p>{(['Home','Projects','Skills','Client Testimonials','About','Contact'] as Tab[]).map(t=><button key={t} className={'nav-link '+(tab===t?'active':'')} onClick={()=>nav(t)}>{t==='Home'?<LayoutGrid size={19}/>:t==='Projects'?<Play size={19}/>:t==='Skills'?<Sparkles size={19}/>:t==='Client Testimonials'?<MessageCircle size={19}/>:t==='About'?<BriefcaseBusiness size={19}/>:<Mail size={19}/>}<span>{t}</span></button>)}<div className="sidebar-rule"/><p className="sidebar-kicker">MY WORK</p>{categories.slice(1).map(c=><button key={c} className="side-category" onClick={()=>{nav('Projects');setCategory(c)}}><span className="side-dot"/>{c}</button>)}<div className="side-bottom">Available for thoughtful collaborations.<br/><span>Built with creativity & care.</span></div></aside>

    <main className={'main '+(mobileOpen?'with-sidebar':'')}> 
      <section className="cover"><div className="cover-grid"/><div className="cover-contents"><div className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES</div><h1>Justine is just in time<br/><em>to impress you.</em></h1><p>Operations, marketing & content — all under one roof.</p></div><div className="cover-mark">JB<span>✦</span></div></section>
      <section className="profile"><div className="avatar avatar-photo"><img src={profilePhoto.src} alt="Justine Bermillo"/><span className="avatar-dot"/></div><div className="profile-text"><div className="name-line"><h2>Justine Bermillo</h2><span className="verify">✦</span></div><p className="handle">@justinep-b <span>·</span> Operations, Marketing & Creative Virtual Assistant</p><p className="profile-bio">Multiskilled support across operations, project management, digital marketing, and creative production.</p></div><div className="profile-actions"><button className="primary-btn" onClick={()=>nav('Contact')}>Let&apos;s work together <ArrowUpRight size={17}/></button><a className="outline-btn" href="https://drive.google.com/file/d/19eFZQfIwo5Lc7VF0engovjzzT1oxjE0X/view" target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={15}/></a></div></section>
      <nav className="tabbar">{(['Home','Projects','Skills','Client Testimonials','About','Contact'] as Tab[]).map(t=><button key={t} className={tab===t?'selected':''} onClick={()=>nav(t)}>{t}</button>)}</nav>

      {tab==='Home'&&<div className="view home-clean">
        <div className="home-welcome">
          <span className="pill">HELLO, I'M JUSTINE</span>
          <h2>More than a pair of hands.<br/><em>A partner who figures things out.</em></h2>
          <p>I began with creative work, and grew into the person clients turn to for content, marketing, systems, and the details that keep projects moving. I may be the quiet one in the room, but I like my work to speak loudly.</p>
          <p>Curious about what I can do? Explore the tabs to see real projects, skills and tools, client feedback, and the story behind my career.</p>
          <div className="home-actions"><button className="primary-btn" onClick={()=>nav('Projects')}>Explore my projects <ArrowRight size={17}/></button><button className="outline-btn" onClick={()=>nav('Client Testimonials')}>What clients say <ArrowUpRight size={15}/></button></div>
        </div>
        <div className="home-paths">
          {[{title:'Projects',note:'See actual work and system previews',tab:'Projects'},{title:'Skills & Tools',note:'How I work and what I use',tab:'Skills'},{title:'Client Testimonials',note:'Hear it from people I have worked with',tab:'Client Testimonials'},{title:'My Story',note:'How I grew beyond my first creative role',tab:'About'}].map(item=><button key={item.title} onClick={()=>nav(item.tab as Tab)}><strong>{item.title}</strong><span>{item.note}</span><ArrowUpRight size={16}/></button>)}
        </div>
      </div>}

      {tab==='Projects'&&<div className="view"><SectionHeading title="The project library" caption="Explore my work, organized like channel playlists"/><div className="filters">{categories.map(c=><button key={c} className={c===category?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div><p className="category-intro">{categoryIntroductions[category]}</p><p className="result-count">{filtered.length} {filtered.length===1?'project':'projects'} {category!=='All'?'in '+category:''}</p><div className="project-grid">{filtered.map(p=><ProjectCard key={p.id} project={p} onOpen={setSelected}/>)}</div>{filtered.length===0&&<div className="empty">No projects match that search. Try another category or keyword.</div>}</div>}

      {tab==='Skills'&&<div className="view"><SectionHeading title="My creative toolkit" caption="A multiskilled mix of execution, strategy, and coordination"/><div className="skill-grid">{skillGroups.map((g,i)=><article key={g.name} className="skill-card"><span className="skill-number">0{i+1} / EXPERTISE</span><h3>{g.name}</h3><p className="skill-description">{g.description}</p><div className="skill-list">{g.items.map(s=><span key={s}><Check size={15}/>{s}</span>)}</div></article>)}</div><div className="skill-note"><Sparkles size={20}/><p>I work across the full content lifecycle — from idea and research to production, publishing, coordination, systems, and problem-solving.</p></div><section className="tools-section"><h2>Tools I use</h2><p>Click any tool to see where I use it and explore related work.</p><div className="tool-groups">{toolGroups.map(group=><div className="tool-group" key={group.name}><h3>{group.name}</h3><div>{group.items.map(tool=><button className="tool-button" key={tool} onClick={()=>setActiveTool(tool)}>{tool} <ArrowUpRight size={13}/></button>)}</div></div>)}</div></section></div>}

      {tab==='Client Testimonials'&&<div className="view">
        <SectionHeading title="Client Testimonials" caption="Real words from people I've supported across content, marketing, and operations"/>
        <div className="testimonial-card testimonial-feature"><div><span className="pill">FOUNDER TESTIMONIAL</span><blockquote>“Justine is an absolute legend.”</blockquote><p>John Coburn · Founder, JoBurn Private Limited · Co-founder, FunnelFuturist</p><p className="proof-context">John talks about hiring me for editing and seeing me grow into marketing, funnels, operations, and much more.</p><a className="outline-btn" href="https://www.loom.com/share/22b3f8dc24cb4aec8917499fe8c15037" target="_blank" rel="noreferrer">Open full testimonial <ArrowUpRight size={15}/></a></div><div className="loom-wrap"><iframe src="https://www.loom.com/embed/22b3f8dc24cb4aec8917499fe8c15037" title="John Coburn's testimonial for Justine" allow="fullscreen; picture-in-picture" allowFullScreen loading="lazy"/></div></div>
        <section className="proof-section"><SectionHeading title="Feedback from John & Jennifer" caption="Selected chat screenshots, with sensitive information hidden"/><p className="proof-private">The protected screenshots include intentional redactions; the blur is part of the image files, not a display error. Click to open an image at its original resolution.</p><div className="evidence-grid">{evidence.map(x=><article className="evidence-card" key={x.src}><a href={x.src} target="_blank" rel="noreferrer"><img src={x.src} alt={x.title} loading="lazy"/></a><div><strong>{x.title}</strong></div></article>)}</div></section>
      </div>}

      {tab==='About'&&<div className="view about-view"><span className="pill">A LITTLE BACKSTORY</span><h2>From creative execution to <em>keeping everything moving.</em></h2><p>Between 2021 and 2022, I worked as a research assistant at my university while also taking on project-based graphic design work through Canva. Later, I started working as a basic video editor, creating thumbnails and visual assets. Then one client saw potential in me outside of YouTube and challenged me to learn email copywriting. That challenge changed the direction of my career.</p><p>From there, things kept expanding. I moved into scriptwriting, channel management, short-form editing, funnels, CRM work, GoHighLevel, automation, AI-assisted workflows, and broader operations support. What began as creative execution slowly grew into marketing, systems, and team coordination.</p><p>One thing that stayed consistent is how I work: I&apos;m a problem solver. When I notice something before it becomes a bigger issue, I try to solve it first using the resources around me before flagging it to the client. I like being the person who helps keep things clear, calm, and moving.</p><p>I&apos;m introverted and usually the quiet one in the room, but I prefer letting my work and actions speak for me. Outside work, I love dogs, coffee, chicken, and watching psychological thrillers and other movies.</p><p>Recently, I&apos;ve used Claude Code to create a team onboarding and task-tracking portal, improve a client onboarding portal, and streamline resource creation after onboarding forms. I value human quality control alongside automation because good systems still need good judgment.</p><div className="timeline"><div><b>2021–2022</b><span>University research assistant and project-based Canva graphic design</span></div><div><b>2022</b><span>Thumbnail design, basic editing, and creative support</span></div><div><b>2023</b><span>Email copywriting, scriptwriting, channel support, and content operations</span></div><div><b>2024</b><span>Funnels, GoHighLevel, automation, AI-assisted workflows, and portal work</span></div><div><b>2024–2026</b><span>Operations, project coordination, systems thinking, and team support</span></div></div><button className="primary-btn" onClick={()=>nav('Projects')}>See the projects <ChevronRight size={16}/></button></div>}

      {tab==='Contact'&&<div className="view contact-view"><span className="pill">CONTACT / COLLABORATE</span><h2>Have a project in mind?<br/><em>Let&apos;s make it happen.</em></h2><p>I support creators, teams, and brands with a mix of content, marketing, and operations. Email me to discuss content, digital marketing, operations, or project management support. You can also view my résumé below.</p><a className="primary-btn" href="mailto:justinebermillo@gmail.com"><Mail size={17}/> Email Justine <ArrowUpRight size={17}/></a><div className="contact-note"><a href="https://drive.google.com/file/d/19eFZQfIwo5Lc7VF0engovjzzT1oxjE0X/view" target="_blank" rel="noreferrer">View résumé ↗</a> · <a href="https://github.com/justinep-b" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>}

      <footer><span>© {new Date().getFullYear()} Justine Bermillo</span><span>Made for curious minds & organized magic ✦</span></footer>
    </main>

    <div className="portfolio-chat"><button className="chat-launch" onClick={()=>setChatOpen(!chatOpen)} aria-label="Ask about Justine's experience"><MessageCircle size={21}/><span>Ask about Justine</span></button>{chatOpen&&<section className="chat-panel" aria-label="Portfolio question assistant"><div className="chat-head"><div><strong>Ask Justine's portfolio</strong><p>Quick answers, real work samples, and contact links</p></div><button aria-label="Close" onClick={()=>setChatOpen(false)}><X size={18}/></button></div><div className="chat-scroll"><div className="chat-bubble">Hi! I&apos;m a guided portfolio assistant. Choose a question and I&apos;ll point you to Justine&apos;s relevant experience. I don&apos;t send messages or invent answers.</div>{faqIndex!==null&&<><div className="chat-user">{faq[faqIndex].q}</div><div className="chat-bubble"><p>{faq[faqIndex].a}</p><div className="chat-links">{faq[faqIndex].links.map(link=><button key={link.text} onClick={()=>{if('url' in link&&link.url){window.open(link.url,'_blank','noopener,noreferrer')}else {nav(('tab' in link&&link.tab?link.tab:'Projects') as Tab);if('category' in link&&link.category)setCategory(link.category);setChatOpen(false)}}}>{link.text} <ArrowUpRight size={12}/></button>)}</div></div></>}</div><div className="chat-questions">{faq.map((f,i)=><button key={f.q} onClick={()=>setFaqIndex(i)}>{f.q}</button>)}</div><div className="chat-bottom"><a href="mailto:justinebermillo@gmail.com?subject=Let's%20talk%20about%20working%20together">Email Justine <Send size={13}/></a><span>Or reply to the application where you found me.</span></div></section>}</div>

    {activeTool&&<div className="modal-backdrop" onMouseDown={()=>setActiveTool(null)}><article role="dialog" aria-modal="true" aria-label={activeTool} className="tool-modal" onMouseDown={e=>e.stopPropagation()}><button className="modal-x" onClick={()=>setActiveTool(null)} aria-label="Close"><X size={19}/></button><span className="pill">WHERE I USE IT</span><h2>{activeTool}</h2><p>{toolUses[activeTool].description}</p><h3>Examples of how I use it</h3><ul>{toolUses[activeTool].examples.map(x=><li key={x}>{x}</li>)}</ul><button className="primary-btn" onClick={()=>{const c=toolUses[activeTool].category;setActiveTool(null);nav('Projects');setCategory(c)}}>See related projects <ArrowRight size={16}/></button></article></div>}

    {selected&&<div className="modal-backdrop" onMouseDown={()=>setSelected(null)}><article role="dialog" aria-modal="true" aria-label={selected.title} className="modal" onMouseDown={e=>e.stopPropagation()}><button className="modal-x" onClick={()=>setSelected(null)} aria-label="Close"><X size={19}/></button><div className={'modal-art '+selected.art}>{selected.video?<video className="project-video" src={selected.video} controls playsInline preload="metadata" autoPlay muted aria-label={selected.title+" project preview"}/>:selected.image?<img src={selected.image} alt={selected.title} onError={e=>{e.currentTarget.style.display='none'}}/>:<span>{selected.category}</span>}</div><div className="modal-content"><span className="pill">{selected.category}</span><h2>{selected.title}</h2>{selected.video&&<p className="preview-disclaimer">Shortened preview · Read the project description below for context.</p>}<p className="project-details">{selected.details}</p>{selected.links&&<div className="project-link-list">{selected.links.map(link=><a key={link.url} className="outline-btn" href={link.url} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={15}/></a>)}</div>}<div className="modal-tags">{selected.tags.map(t=><span key={t}>{t}</span>)}</div>{selected.video?<a className="outline-btn" href="mailto:justinebermillo@gmail.com?subject=Portfolio%20project%20inquiry">Discuss a similar project <ExternalLink size={16}/></a>:selected.url?<a className="primary-btn" href={selected.url} target="_blank" rel="noreferrer">{selected.label||'Explore work'} <ExternalLink size={16}/></a>:<div className="private-note"><FileText size={17}/>{selected.status} — content to be added with permission.</div>}</div></article></div>}
  </div>
}

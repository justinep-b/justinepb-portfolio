export type ProjectLink = {label:string; url:string};
export type Project = {
  id:string;
  title:string;
  category:string;
  subtitle:string;
  details:string;
  tags:string[];
  url?:string;
  label?:string;
  art:string;
  status?:string;
  image?:string;
  video?:string;
  links?:ProjectLink[];
};

export const categories = ['All','YouTube Management','Graphic Design','Digital Marketing','AI & Content Creation','Scriptwriting','Operations & Project Management'];

export const projects:Project[] = [
  {
    id:'cyborgcommunity',
    title:'Cyborg VA Community · Skills & Placement Hub',
    category:'Operations & Project Management',
    subtitle:'GoHighLevel · VA community · Placement support',
    details:'I set up a GoHighLevel community for a VA placement initiative. Applicants and members can explore structured learning paths to upskill, share wins, ask questions, showcase their skills, and connect around possible placement opportunities.\n\nThe goal was to create a supportive, centralized member experience directly inside GoHighLevel, especially for teams that want a community experience without relying on a separate platform like Skool.',
    tags:['GoHighLevel','VA placement','Community setup','Skill paths','Member engagement'],
    art:'art-teal',
    video:'/previews/cyborg-va-community.mp4'
  },
  {
    id:'thumbs',
    title:'Thumbnail design collection',
    category:'Graphic Design',
    subtitle:'Design samples · Canva',
    details:'A curated PDF collection of thumbnail design samples. This is where my creative journey began in 2022. Over time, that visual work became the doorway into broader content, marketing, and operations support.',
    tags:['Canva','Thumbnail design','Visual storytelling'],
    url:'https://drive.google.com/file/d/1xzc4C3ePmybS9ow2z0fptW0BBtxv_Hvk/view',
    label:'View design PDF',
    art:'art-violet',
    image:'https://drive.google.com/thumbnail?id=1fPIL0DGru4QxqqF8BgBPub_nvk1IV_Lh&sz=w1200'
  },
  {
    id:'channels',
    title:'Channels I\'ve worked with',
    category:'YouTube Management',
    subtitle:'YouTube management · Multi-channel support',
    details:'I\'ve supported channels in different niches, with responsibilities depending on the project. My work has included content research, script support, titles and descriptions, thumbnail coordination, timestamps, publishing support, community or comment tasks, and overall content operations.\n\nJForrest English\n• Research and content support for English-learning lessons\n• Titles, descriptions, thumbnails, timestamps, quizzes, and publishing-related tasks\n• Ongoing content operations and channel support\n\nEndless Lore 40K\n• YouTube content support and production workflow assistance\n• Research, organization, and publishing-related help\n\nSerious Survival Shorts\n• Short-form content support, ideation, and content workflow help\n• Assistance across fast-paced Shorts production needs\n\nFinacademy\n• YouTube content workflow support in the finance niche\n• Help with organized content production and publishing support',
    tags:['Channel management','Publishing workflows','Research','Content operations'],
    art:'art-plum',
    links:[
      {label:'JForrest English',url:'https://www.youtube.com/@JForrestEnglish'},
      {label:'Endless Lore 40K',url:'https://www.youtube.com/@EndlessLore40K'},
      {label:'Serious Survival Shorts',url:'https://www.youtube.com/@SeriousSurvivalShorts'},
      {label:'Finacademy',url:'https://www.youtube.com/@finacademy1'}
    ]
  },
  {
    id:'cowritten',
    title:'Co-written YouTube video',
    category:'Scriptwriting',
    subtitle:'Published video · Co-writing credit',
    details:'A published YouTube video that I co-wrote. This project highlights my long-form scripting and collaborative content writing experience.',
    tags:['Scriptwriting','Co-writing','Long-form'],
    url:'https://www.youtube.com/watch?v=NH0qwnWi318',
    label:'Watch video',
    art:'art-rose',
    image:'https://img.youtube.com/vi/NH0qwnWi318/hqdefault.jpg'
  },
  {
    id:'scriptslong',
    title:'Long-form scriptwriting library',
    category:'Scriptwriting',
    subtitle:'Writing samples · Multiple niches',
    details:'Selected long-form script folders covering topics such as finance, luxury, travel, health, cars, and other subjects. Please review sharing permissions before making client documents publicly accessible.',
    tags:['Research','Long-form scripts','Story structure'],
    url:'https://drive.google.com/drive/folders/19yFKBtH2qLEUXlFwuvD0DFGqVeNDYBxd',
    label:'Open writing samples',
    art:'art-indigo'
  },
  {
    id:'scriptshort',
    title:'Short-form writing samples',
    category:'Scriptwriting',
    subtitle:'Writing samples · Shorts',
    details:'A PDF collection of short-form writing samples showcasing concise hooks, pacing, and structured storytelling.',
    tags:['Hooks','YouTube Shorts','Copywriting'],
    url:'https://drive.google.com/file/d/1jw5MURrJVRhXw31oXdzmPo5zV5SxC9FT/view',
    label:'View script PDF',
    art:'art-green'
  },
  {
    id:'email',
    title:'Email marketing & automations',
    category:'Digital Marketing',
    subtitle:'Funnels · CRM support · Workflow coordination',
    details:'My marketing path started when a client saw potential in me beyond video editing and challenged me to learn email copywriting. That opened the door to funnels, CRM work, GoHighLevel, client journeys, and marketing automation.\n\nSince then, I\'ve supported practical campaign tasks, backend coordination, and AI-assisted workflow improvements while keeping human quality control in place.',
    tags:['GoHighLevel','Email copy','Funnels','Automations'],
    art:'art-pink',
    status:'Case study details can be shared selectively'
  },
  {
    id:'ops',
    title:'Operations & project coordination',
    category:'Operations & Project Management',
    subtitle:'Team support · Workflow management · Problem-solving',
    details:'A big part of my value is keeping things moving behind the scenes. I help teams stay organized, spot gaps early, and solve problems before they turn into bigger issues.\n\nThat includes coordination, task management, accountability support, process cleanup, and using available resources first before escalating when possible.',
    tags:['Operations','Team coordination','Project management','Problem-solving'],
    art:'art-stone',
    status:'Case study details can be shared selectively'
  },
  {
    id:'onboardportal',
    title:'Team Portal · Onboarding, Time Tracking & Invoices',
    category:'AI & Content Creation',
    subtitle:'Claude Code · GitHub · Vercel · Operations',
    details:'I built a centralized team portal to make onboarding and offboarding smoother. Team members can follow their onboarding steps, manage their tasks, and log hours either manually or with a built-in time tracker. The portal also supports exporting invoices and timesheets when clients need supporting records.\n\nMy goal was to bring the essential day-to-day processes into one easier-to-manage system.',
    tags:['Claude Code','GitHub','Vercel','Onboarding','Time tracker','Invoices'],
    art:'art-purple',
    video:'/previews/team-portal.mp4'
  },
  {
    id:'clientportal',
    title:'Client Portal · One Place for Every Next Step',
    category:'AI & Content Creation',
    subtitle:'Claude Code · GitHub · Vercel · Client Experience',
    details:'I created a central client portal tailored to a service-based business. Instead of having clients search across emails, documents, and separate links, the portal gives each client one place to find their resources, action items, onboarding steps, and ongoing deliverables.\n\nI focused on logical navigation, a clear journey for new clients, and keeping the experience organized. Specific internal services and client information are intentionally not shown.',
    tags:['Claude Code','GitHub','Vercel','Client onboarding','Resource hub','UX'],
    art:'art-blue',
    video:'/previews/client-portal.mp4'
  },
  {
    id:'creativeai',
    title:'AI-assisted content workflows',
    category:'AI & Content Creation',
    subtitle:'Process showcase · Human QC included',
    details:'I use AI to support creative and operational work, not to skip judgment. That includes drafting, organizing, testing ideas, building simple systems, and improving workflows while still checking outputs manually and keeping quality control in the process.',
    tags:['AI-assisted workflows','Content systems','Creative production','Human QC'],
    art:'art-purple',
    status:'Examples available selectively'
  }
];

export const skillGroups = [
  {
    name:'Operations & management',
    description:'I help keep moving parts organized. My work here includes team coordination, project visibility, follow-through, and solving issues early so clients spend less time chasing details.',
    items:['Team coordination','Project management','Workflow oversight','VA placement','Content calendars']
  },
  {
    name:'Marketing & automation',
    description:'What started with email copywriting expanded into funnels, CRM support, and backend automation. I like making the customer journey clearer while also keeping the internal process cleaner.',
    items:['Email copywriting','GoHighLevel','Marketing funnels','Workflow automation','AI-assisted marketing']
  },
  {
    name:'YouTube & content',
    description:'I started in the YouTube world with thumbnails, then grew into scripting, publishing support, content research, and channel operations. I understand both the creative and the backend side.',
    items:['Channel management','Long-form scriptwriting','Thumbnail design','Shorts & Reels editing','Content research']
  },
  {
    name:'Tools & creative',
    description:'I use a flexible mix of creative, AI, and team tools depending on the project. I\'m comfortable learning new systems quickly when the outcome makes the workflow better.',
    items:['Canva','CapCut','GoHighLevel','Claude Code','AI content tools','Google Workspace']
  },
];

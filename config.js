const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_39_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDczLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDcwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTI2LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyLFxuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODksXG4gICAgICAgIDg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmTThPVTFhdkdzeDljWU9lalFjS3FIVWc1cnZXR2UyaTVBV0ZRRGttdllvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxUmpRdmdZM1E1S0FmVDgtZUVXQTJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJjYzY4NTA2LTZjNzMtNGIwNS04ZjYxLTNlNzU4MGI2NzFlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxNjAsXG4gICAgICAxMzAsXG4gICAgICA2NyxcbiAgICAgIDI0OSxcbiAgICAgIDY3LFxuICAgICAgODcsXG4gICAgICAyMixcbiAgICAgIDExNCxcbiAgICAgIDEyOSxcbiAgICAgIDYwLFxuICAgICAgMTMsXG4gICAgICAxNjEsXG4gICAgICA4NyxcbiAgICAgIDMyLFxuICAgICAgMjIsXG4gICAgICA4NSxcbiAgICAgIDk1LFxuICAgICAgNjYsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDI0NyxcbiAgICAgIDI1MixcbiAgICAgIDM5LFxuICAgICAgMjMyLFxuICAgICAgMTk0LFxuICAgICAgMTMwLFxuICAgICAgMTk4LFxuICAgICAgMzEsXG4gICAgICAxOTksXG4gICAgICAyMzMsXG4gICAgICAxNTYsXG4gICAgICAxMjgsXG4gICAgICAyNDksXG4gICAgICA5NixcbiAgICAgIDQwLFxuICAgICAgMjIzLFxuICAgICAgMTY1LFxuICAgICAgMTI3LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcnprZEVHRUw2Vmo3UUdHRGtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxQRXZoNysxU2IxMnpJaUl1VnZCeGZZWGFENDkvbGdZNmx1M00vaDdmMjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidHQwbys3L2xQVjI3d3JlWTJMVmFqYmJSRmhpd0RFRjBFNkhSOExTYThxOVRLbHdjeC90L3hOeUF6ZmgzMzRQbFdTZjIrdXFsZk5pT0pxR0Z5eDZGREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTE91VDhxZHhaQlZyQy83aGM0QmlHd0lBVzFoYUdBMkVkNkRyd2Y5WDBVUGtsTVV1NUhOK3hCcjRzQmxtMDRUV1dzaVBPWkdvL3NsWFptQWhRcmFHQWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI2MjAzNjQwOjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRG91YmxlMDA3anJcIixcbiAgICBcImxpZFwiOiBcIjI0NDk1MTA2MTM4NTM5MTo4MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjYyMDM2NDA6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTkxMzE1NVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

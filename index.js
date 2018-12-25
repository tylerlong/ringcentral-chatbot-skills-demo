import createApp from 'ringcentral-chatbot/dist/apps'
import pingSkill from 'ringcentral-chatbot-skill-ping'
// import fooSkill from 'ringcentral-chatbot-skill-foo'
// import barSkill from 'ringcentral-chatbot-skill-bar'

const handle = async event => {
  // event handling code
}

const app = createApp(handle, [
  pingSkill
//   fooSkill,
//   barSkill
])
app.listen(3000)

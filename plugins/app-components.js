import Vue from 'vue'

// UI
import Message from '@/components/UI/Message'
import Intro from '@/components/UI/Intro'
import PostsList from '@/components/blog/PostsList'

// Controls
import AppButton from '@/components/UI/controls/Button'
import AppInput from '@/components/UI/controls/Input'
import AppTextarea from '@/components/UI/controls/Textarea'

// UI
Vue.component('Message', Message)
Vue.component('Intro', Intro)
Vue.component('PostsList', PostsList)

// Controls
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextarea', AppTextarea)

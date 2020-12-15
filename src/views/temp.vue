<template>
  <div class="classic-words">
    <div class="wordrs-title">群员经典语录采集器</div>
    <div class="words-content">
      <div class="avatar-container"></div>
      <div class="text">
        <p>早知道就不梭哈诺安混合成长了</p>
      </div>
      <div class="author">
        <span>浮生</span>
      </div>
      <div class="add-time">
        <span>2020-12-15</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data () {
    return {
      words: {
        author: '',
        add_time: '',
        content: '',
        image_url: '',
      }
    }
  },
  mounted () {
    this.getWord()
  },
  methods: {
    getWord () {
      const url = 'https://api.axis-studio.org/fhc/randomQuotation'
      axios.get(url).then(res => {
        let data = res.data
        this.words = data
        console.log(this.words)
      })
    }
  }
}
</script>

<style>

</style>
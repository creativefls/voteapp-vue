<template>
  <div class="row">
    <div class="col-md-4 col-sm-6">

      <div class="card">
        <div class="header">
          <h5 class="title">{{title}}</h5>
        </div>
        <div class="content">
          <ul class="list-unstyled team-members">
            <li v-for="member in members">
              <div class="row">
                <div class="col-xs-3">
                  <div class="avatar">
                    <img :src="member.image" :alt="member.name" class="img-circle img-no-padding img-responsive">
                  </div>
                </div>
                <div class="col-xs-6">
                  {{member.name}}
                  <br>
                  <span :class="getStatusClass(member.status)">
                    <i :class="getIconClass(member.status)"></i>
                    <small>{{member.status}} dilakukan</small>
                  </span>
                </div>

                <div class="col-xs-3 text-right">
                  <button class="btn btn-sm btn-success btn-icon">
                    <i class="fa fa-eye"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Apa yang Harus Aku Lakukan?',
      members: [
        {
          image: 'https://user-images.githubusercontent.com/10141928/29959371-2acadc44-8f21-11e7-9f87-659f1a6f8387.png',
          name: 'Pilih Workshop',
          status: 'belum'
        },
        {
          image: 'https://user-images.githubusercontent.com/10141928/29959370-2ac6cfaa-8f21-11e7-908a-f400599369fe.png',
          name: 'Vote Komunitas',
          status: 'sudah'
        }
      ]
    }
  },
  methods: {
    getStatusClass (status) {
      switch (status) {
        case 'belum':
          return 'text-danger'
        case 'sudah':
          return 'text-success'
        // case 'Busy':
        //   return 'text-muted'
        default:
          return 'text-success'
      }
    },
    getIconClass (status) {
      switch (status) {
        case 'belum':
          return 'fa fa-info-circle'
        case 'sudah':
          return 'fa fa-check-circle'
        // case 'Busy':
        //   return 'text-muted'
        default:
          return 'fa fa-check-circle'
      }
    }
  }
}
</script>

<style>
</style>

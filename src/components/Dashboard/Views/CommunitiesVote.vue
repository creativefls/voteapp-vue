<template>
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-6" v-for="community in communities">
      <div class="card">
        <div class="content">
          <div class="row">
            <div class="col-xs-4">
              <img class="img-voting" :src="community.imageUrl" :alt="community.name">
            </div>
            <div class="col-xs-8">
                <div class="numbers">
                    <p>Kelas</p>
                    {{ community.name }}
                </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="text-center">
                <div class="col-xs-12">
                    <a href="#" class="btn btn-primary btn-fill btn-sm btn-block"><i class="fa fa-check-circle"></i>Vote {{ community.name }}</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      communities: [
        {
          name: 'Komunitas Pertama',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        },
        {
          name: 'Komunitas Kedua',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        },
        {
          name: 'Komunitas Ketiga',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        },
        {
          name: 'Komunitas Empat',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        },
        {
          name: 'Komunitas Lima',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        },
        {
          name: 'Komunitas Enam',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        },
        {
          name: 'Komunitas Tujuh',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        },
        {
          name: 'Komunitas Delapan',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        },
        {
          name: 'Komunitas Sembilan',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        },
        {
          name: 'Komunitas Sepuluh',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>

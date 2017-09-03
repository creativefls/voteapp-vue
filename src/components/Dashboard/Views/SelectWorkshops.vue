<template>
  <div>
    <div class="col-lg-4 col-md-4 col-sm-6" v-for="workshop in workshops">
      <div class="card">
        <div class="content">
          <div class="row">
            <div class="col-xs-4">
              <img class="img-voting" :src="workshop.imageUrl" :alt="workshop.name">
            </div>
            <div class="col-xs-8">
              <div class="numbers">
                <p>Kelas</p>
                {{ workshop.name }} </div>
            </div>
          </div>
          <div class="footer">
            <hr>
            <div class="stats">
              <div class="col-xs-12">
                <div class="col-xs-6">
                  <i class="ti-ruler-pencil"></i> <strong> {{ workshop.jumlah }}/49</strong>
                </div>

                <!-- kelas penuh -->
                <div class="col-xs-6" v-if="workshop.jumlah >= 49">
                  <a href="#" class="btn btn-danger btn-xs btn-fill btn-wd btn-block">Penuh</a>
                </div>
                <!-- kelas tersedia -->
                <div class="col-xs-6" v-else>
                  <a href="<?=base_url();?>MemberController/pilih_kelas/<?=$user->id;?>/1" class="btn btn-success btn-xs btn-fill btn-wd btn-block">Tambah Kelas</a>
                </div>

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
      workshops: [
        {
          name: 'Idea Development',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752965-f91a375e-8b91-11e7-9791-1bd78efaa8e0.png',
          jumlah: 12
        },
        {
          name: 'Content',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752967-f924a25c-8b91-11e7-8bc9-e8186a8f4072.png',
          jumlah: 12
        },
        {
          name: 'Branding',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png',
          jumlah: 12
        },
        {
          name: 'Presentation Skill',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752968-f927f8bc-8b91-11e7-8593-13c99ef6c173.png',
          jumlah: 12
        },
        {
          name: 'Customer Insight',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752966-f91c7262-8b91-11e7-8f75-44a94a1671e9.png',
          jumlah: 12
        }
      ]
    }
  }
}
</script>

<style scoped>
  .numbers {
    font-size: 1.4em !important;
  }
  .img-voting{
    max-width: 5em;
    margin-left: 1em;
  }

</style>

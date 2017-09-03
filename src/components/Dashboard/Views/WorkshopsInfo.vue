<template>
  <div class="row">
    <div class="col-md-12">
			<div class="card">
				<div class="header">
					<h4 class="title">Kelas Workshop</h4>
					<p class="category">diperbaharui pada 28 Agustus 2017</p>
				</div>
        <div class="content">
					<div class="typo-line" v-for="workshop in workshops">
						<h5>{{ workshop.name }}</h5>
						<blockquote>
							<p>
								<img class="img-informasi" :src="workshop.imageUrl" :alt="workshop.name">
								{{ workshop.description }}
							</p>
						</blockquote>
					</div>

          <div class="text-center">
            <a href="#" class="btn btn-info btn-fill btn-wd">Pilih Kelas Saya</a>
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
          description: 'Kelas ini bertujuan untuk menantang delegates bagaimana mereka dapat mengembangkan ide-idea yang selama ini mereka miliki agar menjadi suatu karya yang nyata.',
          quota: 49,
          filledQuota: 12
        },
        {
          name: 'Content',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752967-f924a25c-8b91-11e7-8bc9-e8186a8f4072.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          quota: 49,
          filledQuota: 12
        },
        {
          name: 'Branding',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752964-f91742ba-8b91-11e7-9181-9e9c8a5f2076.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          quota: 49,
          filledQuota: 12
        },
        {
          name: 'Presentation Skill',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752968-f927f8bc-8b91-11e7-8593-13c99ef6c173.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          quota: 49,
          filledQuota: 12
        },
        {
          name: 'Customer Insight',
          imageUrl: 'https://user-images.githubusercontent.com/10141928/29752966-f91c7262-8b91-11e7-8f75-44a94a1671e9.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          quota: 49,
          filledQuota: 12
        }
      ]
    }
  }
}
</script>

<style>
  .img-informasi{
    clear: left;
    float: left;
    margin-right: 0.7em;
    max-width: 6em;
  }
</style>

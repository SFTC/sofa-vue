<template>
  <div>
    <comp-show-container showClass>
      <i class="sofa-icon-loading"></i>
    </comp-show-container>
    <!-- <publish-sofa-button>测试发布</publish-sofa-button> -->
  </div>
</template>

<script>
// import PublishSofaButton from '@sftc/sofa-button/button';

import CompShowContainer from '../../components/CompShowContainer';

export default {
  name: 'IconPage',
  components: {
    CompShowContainer,
    // PublishSofaButton,
  },
};
</script>

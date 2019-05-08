<template>
  <div>
    <div class="column">
      <button class="button" @click="cameraStart">カメラスタート</button>
    </div>
    <video autoplay></video>
  </div>
</template>

<script>
export default {
  methods: {
    cameraStart() {
      const p = navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: this.width,
          height: this.height,
          frameRate: { ideal: 5, max: 15 }
        }
      });
      p.then(function(mediaStream) {
        document.querySelector("video").srcObject = mediaStream;
      });
    }
  }
};
</script>
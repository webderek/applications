<template>
  <div class="loader">
    <div class="scene">
      <svg
          version="1.1"
          width="38"
      height="38"
          id="dc-spinner"
          xmlns="http://www.w3.org/2000/svg"
          x="0px" y="0px"
          viewBox="0 0 38 38"
          preserveAspectRatio="xMinYMin meet"
      >
      <text x="14" y="21" font-family="Monaco" font-size="2px" style="letter-spacing:0.6" fill="grey">LOADING
        <animate
            attributeName="opacity"
            values="0;1;0" dur="1.8s"
            repeatCount="indefinite"/>
      </text>
      <path fill="#373a42" d="M20,35c-8.271,0-15-6.729-15-15S11.729,5,20,5s15,6.729,15,15S28.271,35,20,35z M20,5.203
    C11.841,5.203,5.203,11.841,5.203,20c0,8.159,6.638,14.797,14.797,14.797S34.797,28.159,34.797,20
    C34.797,11.841,28.159,5.203,20,5.203z">
      </path>

      <path fill="#373a42" d="M20,33.125c-7.237,0-13.125-5.888-13.125-13.125S12.763,6.875,20,6.875S33.125,12.763,33.125,20
    S27.237,33.125,20,33.125z M20,7.078C12.875,7.078,7.078,12.875,7.078,20c0,7.125,5.797,12.922,12.922,12.922
    S32.922,27.125,32.922,20C32.922,12.875,27.125,7.078,20,7.078z">
      </path>

      <path fill="#2AA198" stroke="#2AA198" stroke-width="0.6027" stroke-miterlimit="10" d="M5.203,20
			c0-8.159,6.638-14.797,14.797-14.797V5C11.729,5,5,11.729,5,20s6.729,15,15,15v-0.203C11.841,34.797,5.203,28.159,5.203,20z">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            calcMode="spline"
            keySplines="0.4, 0, 0.2, 1"
            keyTimes="0;1"
            dur="2s"
            repeatCount="indefinite" />
      </path>

      <path fill="#859900" stroke="#859900" stroke-width="0.2027" stroke-miterlimit="10" d="M7.078,20
  c0-7.125,5.797-12.922,12.922-12.922V6.875C12.763,6.875,6.875,12.763,6.875,20S12.763,33.125,20,33.125v-0.203
  C12.875,32.922,7.078,27.125,7.078,20z">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="1.8s"
            repeatCount="indefinite" />
      </path>
      </svg>
    </div>

    <!--dc logo -->
    <a class="dc-logo" href="http://digitalcraft.co" target="_blank"><svg version="1.1" id="digital-craft" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="43.43px" height="49.313px" viewBox="0 0 43.43 49.313" enable-background="new 0 0 43.43 49.313" xml:space="preserve"><path fill="rgba(0,0,0,0.4)" d="M42.08,11.34L23.065,0.362c-0.836-0.482-1.865-0.482-2.701,0L1.35,11.34C0.515,11.822,0,12.714,0,13.679v21.956c0,0.965,0.515,1.856,1.35,2.339l19.014,10.978c0.418,0.241,0.884,0.362,1.35,0.362c0.466,0,0.933-0.121,1.35-0.362L42.08,37.973c0.836-0.482,1.35-1.374,1.35-2.339V13.679C43.43,12.714,42.915,11.822,42.08,11.34z"/><polygon fill="#6E6F71" points="29.127,21.537 14.302,21.537 7.594,28.243 12.535,33.189 21.715,24.009 30.892,33.189 35.836,28.243"/><polygon fill="#00FFFE" points="34.529,17.905 25.492,17.905 21.715,14.126 17.937,17.905 8.9,17.905 8.9,20.078 34.529,20.078"/></svg></a>


  </div>
</template>

<script>
export default {
  name: "Loader",
  components: {}
}

</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.8);
  /* Demo Styles - It's all in the SVG  */
  html{
    height:100%;
    min-height: 100%;
    overflow:hidden;

    body {
      background: #222428;
      background-size: 163px;
      font: 14px/21px Monaco, sans-serif;
      color: #999;
      font-smoothing: antialiased;
      text-size-adjust: 100%;
      height:100%;
      min-height: 100%;

      a, a:visited{
        text-decoration:none;
        color:#FF805F
      }
      h4{margin:0;color:#666;}
    }
  }



  .scene {
    width: 100%;
    height: 100%;
    perspective: 600;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
      width: 240px;
      height: 240px;
    }
  }

  .dc-logo {
    position: fixed;
    right: 10px;
    bottom: 10px;
  }

  .dc-logo:hover {
    svg{
      transform-origin: 50% 50%;
      animation: arrow-spin 2.5s 0s cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite;
    }
    &:hover{
      &:before {
        content:'\2764';
        padding: 6px;
        font: 10px/1 Monaco, sans-serif;
        font-size:10px;
        color: #00fffe;
        text-transform:uppercase;
        position: absolute;
        left: -70px;
        top: -30px;
        white-space: nowrap;
        z-index: 20px;
        box-shadow: 0px 0px 4px #222;
        background:rgba(0,0,0,0.4);
      }
      &:after {
        content:'Digital Craft';
        padding: 6px;
        font: 10px/1 Monaco, sans-serif;
        font-size:10px;
        color: #6E6F71;
        text-transform:uppercase;
        position: absolute;
        right: 0;
        top: -30px;
        white-space: nowrap;
        z-index: 20px;
        box-shadow: 0px 0px 4px #222;
        background:rgba(0,0,0,0.4);
        background-image:none;
      }
    }
  }

  @keyframes arrow-spin {
    50% {
      transform: rotateY(360deg);
    }
  }
}
</style>
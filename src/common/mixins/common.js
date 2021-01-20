export default {
  data() {
    return {
      loading: true
    }
  },
  filters: {
    numToString(value) {
      return value.toString();
    }
  }
}
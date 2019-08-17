const sampleObject = {
  sampleMethod: () => {
    console.log(this);
  },
  anotherMethod() {
    console.log(this);
  }
};

// sampleObject.sampleMethod()
sampleObject.anotherMethod();

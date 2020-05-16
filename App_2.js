if (perm === null) {
    return <View></View>
  } else if (perm === false) {
    <View style={styles.container}>
      <Text>Allow access to camera</Text>
    </View>
  } else {
    return( 
    <View style={styles.container}>
    <Camera style={{ flex: 1 }} type={this.state.type}>
      <View style={{
        flex: 1,
        backfaceVisibility: 'transparent',
        flexDirection: 'row'
      }}>
        <Button title="flip" onPress={this.handleFlip}></Button>
        <Button title="Photo" onPress={this.handlePicture}></Button>
      </View>
    </Camera>
  </View>
    )
  }
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { Small, Original } from './styles';

const OriginalAnimated = Animated.createAnimatedComponent(Original);

const LazyImage = ({ smallSource, source, aspectRatio, shouldLoad }) => {
  const opacity = new Animated.Value(0);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      setLoaded(true);
    }
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={2}
    >
      {loaded && (
        <OriginalAnimated
          style={{ opacity }}
          source={source}
          ratio={aspectRatio}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  );
};

LazyImage.propTypes = {
  smallSource: PropTypes.any.isRequired,
  source: PropTypes.any.isRequired,
  aspectRatio: PropTypes.number.isRequired,
  shouldLoad: PropTypes.bool.isRequired
};

export default LazyImage;

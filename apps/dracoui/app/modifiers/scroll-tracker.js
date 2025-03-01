import { modifier } from 'ember-modifier';

export default modifier(function scrollTracker(element, [callback]) {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    callback(scrollY);
  };

  handleScroll();

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});

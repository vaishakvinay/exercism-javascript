//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (p < 2 || p > 9999 || g < 2 || g > 9999) {
  throw new Error('constructor arguments are out of range');
  } 

  const isPrime = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
  };

  if (!isPrime(p) || !isPrime(g)) {

  throw new Error('constructor arguments are not prime');
  }
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
      if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('Invalid private key');
    }

    return (this.g ** privateKey) % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey ** myPrivateKey) % this.p;
  }

  static getPrivateKey(p) {
  return Math.floor(Math.random() * (p - 2)) + 2;
  }
}

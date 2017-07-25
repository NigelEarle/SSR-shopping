import Link from 'next/link';

const Index = () => (
  <div>
    <Link as="/login" href="/login" prefetch>
      <a>Login</a>
    </Link>
    <Link as="/register" href="/register" prefetch>
      <a>Register</a>
    </Link>
    <h1>SHOPPING CART</h1>
  </div> 
);

export default Index;

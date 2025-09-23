export default function AlumniHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Welcome Alumni 🎓</h1>
      <img
        src="https://img.freepik.com/free-vector/database-concept-illustration_114360-583.jpg?w=600"
        alt="Alumni Data Management"
        style={{ maxWidth: 340, width: '90%', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginBottom: 16 }}
      />
      <p style={{ color: '#444', fontSize: 18, textAlign: 'center', maxWidth: 400 }}>
        Manage alumni data, connect with your network, and keep your records up to date.
      </p>
    </div>
  );
}

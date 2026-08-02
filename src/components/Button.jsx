export function Button({ action, variant = 'primary', className = '' }) {
  if (!action) return null;
  return <a className={`button button--${variant} ${className}`} href={action.href}>{action.label}</a>;
}

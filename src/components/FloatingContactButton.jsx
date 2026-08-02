export function FloatingContactButton({ action, label }) {
  return <a className="floating-contact" href={action.href} aria-label={label}><span aria-hidden="true">↗</span><b>{action.label}</b></a>;
}

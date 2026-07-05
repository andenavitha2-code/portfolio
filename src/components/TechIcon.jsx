import React from 'react';

export default function TechIcon({ name, className = "w-6 h-6" }) {
  const iconName = name.toLowerCase().trim();

  // Custom inline SVG definitions for pixel-perfection
  switch (iconName) {
    case 'react':
    case 'react native':
    case 'reactnative':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" title="React">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff"/>
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'js':
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="JavaScript">
          <path d="M0 0h24v24H0V0z" fill="#f7df1e"/>
          <path d="M19.8 18.5c-.3.8-.9 1.4-1.7 1.8-1 .4-2.2.3-3-.2-.7-.5-1.1-1.2-1.3-2.1l1.9-.5c.1.5.4.9.8 1.1.4.2.9.2 1.3-.1.4-.3.6-.7.6-1.1 0-.9-.7-1.2-1.8-1.7l-.6-.3c-1.3-.5-2.2-1.2-2.2-2.7 0-1.2.7-2.1 1.8-2.6 1.1-.4 2.3-.3 3.2.3.8.5 1.2 1.3 1.3 2.2l-1.8.5c-.1-.5-.3-.8-.6-1-.3-.2-.7-.2-1.1 0-.3.2-.5.5-.5.8 0 .7.6 1 1.7 1.4l.6.3c1.5.6 2.3 1.4 2.3 2.9h-.1zM11.6 8.5v8.8c0 1.2-.5 2.1-1.5 2.5-1.1.4-2.3.2-3.1-.4-.6-.5-.9-1.2-1-2l1.9-.4c.1.5.3.8.6 1 .3.2.7.2 1 0 .4-.2.5-.6.5-1.1V8.5h1.6v.0z" fill="#000000"/>
        </svg>
      );
    case 'css':
    case 'css3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="CSS3">
          <path d="M1.5 22L0 0h24l-1.5 22L12 24z" fill="#1572B6"/>
          <path d="M12 22.1l8.7-2.4L22.1 2.1H12v20z" fill="#33A9DC"/>
          <path d="M12 11.2H7.6l-.3-3H12V5.3H4.4L5.3 14h6.7v-2.8zm0 5.6l-3.8-1-.2-2.5H5.1l.4 5.3 6.5 1.8v-3.6z" fill="#FFFFFF"/>
          <path d="M12 11.2h4.5l-.4 4.5-4.1 1.1v3.6l6.5-1.8.9-9.9H12v2.5zm0-5.9h7.4l.2-2.5H12v2.5z" fill="#EFEFEF"/>
        </svg>
      );
    case 'html':
    case 'html5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="HTML5">
          <path d="M1.5 22L0 0h24l-1.5 22L12 24z" fill="#E34F26"/>
          <path d="M12 22.1l8.7-2.4L22.1 2.1H12v20z" fill="#F16529"/>
          <path d="M12 5.3H6.8l.4 4.2h4.8V5.3zm0 6.6H7.6l.3 3.5 4.1 1.1v-4.6zm0 4.6l-4.1-1.1-.3-3.2H4.8l.5 5.9 6.7 1.8v-3.4z" fill="#EFEFEF"/>
          <path d="M12 5.3v4.2h7.1l-.4-4.2H12zm0 6.6v4.6l4.1-1.1.4-4.5H12zm0 4.6l4.1-1.1.6-6.1H12V5.3" fill="#FFFFFF"/>
        </svg>
      );
    case 'figma':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="Figma">
          <path d="M12 12a4 4 0 01-4-4 4 4 0 014-4h4v8h-4z" fill="#F24E1E"/>
          <path d="M4 8a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" fill="#FF7262"/>
          <path d="M4 16a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" fill="#A259FF"/>
          <path d="M12 12h4v4a4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4z" fill="#1ABCFE"/>
          <path d="M12 12a4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4h-4v-8z" fill="#0ACF83"/>
        </svg>
      );
    case 'node':
    case 'node.js':
    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="Node.js">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm7.3 14.2l-7.3 4.1-7.3-4.1V7.8l7.3-4.1 7.3 4.1v8.4z" fill="#339933"/>
          <path d="M12 5.8l5.5 3.1v6.2L12 18.2l-5.5-3.1V8.9L12 5.8z" fill="#339933" opacity="0.3"/>
          <path d="M12 8.5L8.5 10.5v3l3.5 2 3.5-2v-3L12 8.5zm1.8 4.7l-1.8 1-1.8-1V10.8l1.8-1 1.8 1v2.4z" fill="#339933"/>
        </svg>
      );
    case 'c++':
    case 'cpp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="C++">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#00599C"/>
          <path d="M12 3.8L3.8 8v8l8.2 4.2 8.2-4.2V8L12 3.8z" fill="#004482"/>
          <path d="M11.5 8.5c-2 0-3 1.2-3 3.5s1 3.5 3 3.5c1.2 0 2-.5 2.5-1l1.5 1c-.8 1-2.2 1.8-4 1.8-3.3 0-5.3-2.2-5.3-5.3s2-5.3 5.3-5.3c1.8 0 3.2.7 4 1.7l-1.5 1.1c-.5-.6-1.3-1.3-2.5-1.3z" fill="#FFFFFF"/>
          <path d="M17.5 11h-1.5v1h1.5v1.5h1v-1.5h1.5v-1h-1.5v-1.5h-1V11zM21.5 11v1h1.5v1.5h1v-1.5H25.5v-1h-1.5v-1.5h-1V11h-1.5z" fill="#00599C"/>
        </svg>
      );
    case 'pr':
    case 'premiere':
    case 'premierepro':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="Premiere Pro">
          <rect width="24" height="24" rx="4" fill="#00005C"/>
          <rect x="1" y="1" width="22" height="22" rx="3" stroke="#9999FF" strokeWidth="2" fill="none"/>
          <text x="5" y="16" fill="#9999FF" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="11px">Pr</text>
        </svg>
      );
    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="Tailwind CSS">
          <path d="M12 6.018c-3.182 0-4.773 1.591-4.773 4.773 0 3.182 1.591 4.772 4.773 4.772 3.182 0 4.772-1.59 4.772-4.772 0-3.182-1.59-4.773-4.772-4.773zm-6 6c-3.182 0-4.773 1.591-4.773 4.773 0 3.181 1.591 4.772 4.773 4.772 3.182 0 4.772-1.591 4.772-4.772 0-3.182-1.59-4.773-4.772-4.773z" fill="#06B6D4" opacity="0.6"/>
          <path d="M18 11.018c-3.182 0-4.773 1.591-4.773 4.773 0 3.181 1.591 4.772 4.773 4.772 3.182 0 4.772-1.59 4.772-4.772 0-3.182-1.59-4.773-4.772-4.773zm-6 6c-3.182 0-4.773 1.591-4.773 4.773 0 3.181 1.591 4.772 4.773 4.772 3.182 0 4.772-1.591 4.772-4.772 0-3.182-1.59-4.773-4.772-4.773z" fill="#06B6D4"/>
        </svg>
      );
    case 'firebase':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="Firebase">
          <path d="M3.89 18.25l1.63-10.22 8.35 10.22H3.89z" fill="#FFC24C"/>
          <path d="M13.87 2.22a.75.75 0 00-1.28-.21l-7.07 11.2 8.35-10.99z" fill="#FFA611"/>
          <path d="M12 22l8.11-4.63-2.14-11.45-5.97 16.08z" fill="#F44336"/>
          <path d="M2.5 18l1.39.25 1.63-10.22L2.5 18z" fill="#FF9100"/>
        </svg>
      );
    case 'expo':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" title="Expo">
          <path d="M2 3h20v2L13 13.5v7.5h-2v-7.5L2 5V3zm2.5 2l7.5 7.5 7.5-7.5H4.5z"/>
        </svg>
      );
    case 'materialui':
    case 'mui':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="Material UI">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#0081CB"/>
          <path d="M12 2l10 5v10l-10 5V2z" fill="#00b0ff"/>
          <path d="M12 6.5l6.5 3.25v4.5L12 17.5V6.5z" fill="#FFFFFF" opacity="0.8"/>
        </svg>
      );
    case 'qt':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="Qt">
          <circle cx="12" cy="12" r="10" stroke="#41CD52" strokeWidth="2" fill="none"/>
          <path d="M17 17l4 4" stroke="#41CD52" strokeWidth="2" strokeLinecap="round"/>
          <text x="7" y="15" fill="#41CD52" fontFamily="sans-serif" fontWeight="bold" fontSize="10px">Qt</text>
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" title="GitHub">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" title="LinkedIn">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    case 'behance':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" title="Behance">
          <path d="M8.22 19c-1.638 0-3.05-.38-4.237-1.143C2.8 17.1 2 16.035 1.583 14.66a8.813 8.813 0 01-.42-2.82c0-1 .147-1.92.44-2.756a5.79 5.79 0 011.29-2.146 5.86 5.86 0 012.062-1.4C5.908 5.183 7.07 5 8.435 5c1.238 0 2.316.143 3.237.427a5.215 5.215 0 0 1 2.28 1.4c.59.6.996 1.347 1.218 2.24.168.675.253 1.503.253 2.483H4.453c.038.932.228 1.637.57 2.115.43.593 1.077.89 1.942.89.626 0 1.15-.098 1.572-.294.423-.197.804-.505 1.144-.925l2.42 1.48c-.64.95-1.465 1.677-2.475 2.183C9.626 18.747 8.97 19 8.22 19zm-.25-10.743c-.702 0-1.25.196-1.644.59-.395.393-.615.932-.66 1.616h4.526c-.015-.653-.186-1.173-.513-1.562-.328-.39-.898-.644-1.709-.644zm11.31 2.22h3.9v1.072h-3.9v-1.072zm.29-4.305c1.073 0 1.97.16 2.693.475a4.3 4.3 0 0 1 1.764 1.378 4.2 4.2 0 0 1 .643 2.392c0 .907-.215 1.645-.644 2.213-.428.568-.973.978-1.634 1.232v.092c.866.246 1.52.71 1.963 1.39a3.84 3.84 0 0 1 .665 2.274 4.54 4.54 0 0 1-.72 2.53 4.96 4.96 0 0 1-2.022 1.69c-.87.41-1.956.61-3.26.61h-5.26V6.17h5.875zM14.7 10.74h2.525c.675 0 1.16-.118 1.455-.355.295-.237.442-.607.442-1.11 0-.482-.14-.836-.42-1.063-.28-.227-.756-.34-1.428-.34H14.7v2.87zm0 6.64h2.72c.706 0 1.218-.124 1.536-.37.318-.247.477-.655.477-1.222 0-.528-.158-.922-.476-1.18-.318-.26-.856-.39-1.61-.39H14.7v3.16z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" title="YouTube">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" title="Instagram">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      );
    default:
      return (
        <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-1 rounded uppercase">{name}</span>
      );
  }
}

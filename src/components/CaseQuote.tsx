import React from 'react';

interface CaseQuoteProps {
  text: string;
  attribution: string;
  photo: string;
  photoPosition?: string;
}

export const CaseQuote: React.FC<CaseQuoteProps> = ({
  text,
  attribution,
  photo,
  photoPosition = 'center 22%',
}) => {
  const [name, ...rest] = attribution.split(',');
  const role = rest.join(',').trim();

  return (
    <blockquote className="m-0 mt-10 w-full max-w-[48rem] border-y border-ink py-8 md:py-10">
      <div className="grid grid-cols-[auto_1fr] items-start gap-x-4 md:gap-x-8">
        <span
          className="select-none m-0 font-sans font-normal leading-none text-ink"
          style={{ fontSize: 'clamp(2.75rem, 4vw, 3.5rem)' }}
          aria-hidden="true"
        >
          “
        </span>
        <div className="min-w-0">
          <p className="font-sans font-medium text-ink m-0 max-w-[34rem] leading-[1.35] text-[clamp(1.15rem,1.55vw,1.4rem)]">
            {text}
          </p>
          <img
            src={photo}
            alt=""
            className="case-quote-photo mt-8 block h-16 w-16 object-cover"
            style={{ objectPosition: photoPosition, borderRadius: '9999px' }}
          />
          <p className="font-sans font-medium text-ink m-0 mt-3 text-[0.95rem] leading-snug">{name.trim()}</p>
          {role ? (
            <p className="font-mono font-normal uppercase tracking-[0.12em] text-ink-muted m-0 mt-1 text-[0.625rem]">
              {role}
            </p>
          ) : null}
        </div>
      </div>
    </blockquote>
  );
};

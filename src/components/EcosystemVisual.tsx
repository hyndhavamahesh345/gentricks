type VisualKind = 'Builders' | 'Creators' | 'Students' | 'Entrepreneurs';

const photos: Record<VisualKind, string> = {
  Builders: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1400',
  Creators: 'https://images.pexels.com/photos/37178232/pexels-photo-37178232.jpeg?auto=compress&cs=tinysrgb&w=1400',
  // Use a real, natural laptop scene for the Students pathway.
  Students: 'https://images.pexels.com/photos/7128975/pexels-photo-7128975.jpeg?auto=compress&cs=tinysrgb&w=1400',
  Entrepreneurs: 'https://images.pexels.com/photos/7213187/pexels-photo-7213187.jpeg?auto=compress&cs=tinysrgb&w=1400',
};

export function EcosystemVisual({ kind }: { kind: VisualKind }) {
  return (
    <div className="ecosystem-feature-art">
      <img className={'ecosystem-photo ecosystem-photo-' + kind.toLowerCase()} src={photos[kind]} alt={`Real people representing the GENTRICKS ${kind.toLowerCase()} pathway`} width="1400" height="933" decoding="async" />
      <div className="ecosystem-art-caption"><span>GENTRICKS / PATHWAY</span><strong>{kind}</strong></div>
      <small className="photo-credit">Photo: Pexels</small>
    </div>
  );
}

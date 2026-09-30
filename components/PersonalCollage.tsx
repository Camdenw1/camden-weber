import Motif from '@/components/Motif'

// Independent sketches, kept in their own space below the introduction.
export default function PersonalCollage() {
  return (
    <div className="personal-collage" aria-hidden="true">
      <Motif kind="palm" className="collage-palm" />
      <Motif kind="coast" className="collage-coast" />
      <Motif kind="royce" className="collage-royce" />
      <Motif kind="network" className="collage-network" />
      <Motif kind="mountain" className="collage-mountain" />
      <Motif kind="basketball" className="collage-ball" />
    </div>
  )
}

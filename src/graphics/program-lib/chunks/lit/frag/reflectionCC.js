export default /* glsl */`
#ifdef LIT_CLEARCOAT
uniform float material_clearCoatReflectivity;

void addReflectionCC() {
    ccReflection += vec4(calcReflection(ccReflDirW, ccGlossiness), material_clearCoatReflectivity);
}
#endif
`;

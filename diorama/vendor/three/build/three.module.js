import{Matrix3,Vector2,Color,mergeUniforms as ft,Vector3,Mesh,BoxGeometry,ShaderMaterial,BackSide,cloneUniforms as Ft,Matrix4,ColorManagement,SRGBTransfer,PlaneGeometry,FrontSide,getUnlitUniformColorSpace as $t,IntType,warn,HalfFloatType,UnsignedByteType,FloatType,RGBAFormat,Plane,WebGLRenderTarget,CubeTexture,NoBlending,LinearMipmapLinearFilter,LinearFilter,CubeCamera,floorPowerOfTwo as kn,CubeReflectionMapping,CubeRefractionMapping,LinearSRGBColorSpace,EquirectangularReflectionMapping,EquirectangularRefractionMapping,warnOnce,Uint32BufferAttribute,Uint16BufferAttribute,error,DataArrayTexture,Vector4,BufferGeometry,Float32BufferAttribute,RawShaderMaterial,OrthographicCamera,DepthTexture,DepthStencilFormat,UnsignedInt248Type,NoToneMapping,CustomToneMapping,NeutralToneMapping,AgXToneMapping,ACESFilmicToneMapping,CineonToneMapping,ReinhardToneMapping,LinearToneMapping,Data3DTexture,AlwaysCompare,Texture,CubeDepthTexture,GLSL3,VSMShadowMap,PCFShadowMap,AddOperation,MixOperation,MultiplyOperation,LinearTransfer,UniformsUtils,DoubleSide,NormalBlending,TangentSpaceNormalMap,ObjectSpaceNormalMap,Layers,RGFormat,RG11_EAC_Format,RED_GREEN_RGTC2_Format,MeshDepthMaterial,MeshDistanceMaterial,BufferAttribute,PCFSoftShadowMap,DepthFormat,NearestFilter,UnsignedIntType,GreaterEqualCompare,LessEqualCompare,Frustum,LessEqualDepth,ReverseSubtractEquation,SubtractEquation,AddEquation,OneMinusConstantAlphaFactor,ConstantAlphaFactor,OneMinusConstantColorFactor,ConstantColorFactor,OneMinusDstAlphaFactor,OneMinusDstColorFactor,OneMinusSrcAlphaFactor,OneMinusSrcColorFactor,DstAlphaFactor,DstColorFactor,SrcAlphaSaturateFactor,SrcAlphaFactor,SrcColorFactor,OneFactor,ZeroFactor,NotEqualDepth,GreaterDepth,GreaterEqualDepth,EqualDepth,LessDepth,AlwaysDepth,NeverDepth,CullFaceNone,CullFaceBack,CullFaceFront,CustomBlending,MultiplyBlending,SubtractiveBlending,AdditiveBlending,ReversedDepthFuncs as zn,MinEquation,MaxEquation,MirroredRepeatWrapping,ClampToEdgeWrapping,RepeatWrapping,LinearMipmapNearestFilter,NearestMipmapLinearFilter,NearestMipmapNearestFilter,NotEqualCompare,GreaterCompare,EqualCompare,LessCompare,NeverCompare,NoColorSpace,getByteLength as Qt,UnsignedShortType,createElementNS as Xn,UnsignedShort4444Type,UnsignedShort5551Type,UnsignedInt5999Type,UnsignedInt101111Type,ByteType,ShortType,AlphaFormat,RGBFormat,RedFormat,RedIntegerFormat,RGIntegerFormat,RGBAIntegerFormat,RGB_S3TC_DXT1_Format,RGBA_S3TC_DXT1_Format,RGBA_S3TC_DXT3_Format,RGBA_S3TC_DXT5_Format,RGB_PVRTC_4BPPV1_Format,RGB_PVRTC_2BPPV1_Format,RGBA_PVRTC_4BPPV1_Format,RGBA_PVRTC_2BPPV1_Format,RGB_ETC1_Format,RGB_ETC2_Format,RGBA_ETC2_EAC_Format,R11_EAC_Format,SIGNED_R11_EAC_Format,SIGNED_RG11_EAC_Format,RGBA_ASTC_4x4_Format,RGBA_ASTC_5x4_Format,RGBA_ASTC_5x5_Format,RGBA_ASTC_6x5_Format,RGBA_ASTC_6x6_Format,RGBA_ASTC_8x5_Format,RGBA_ASTC_8x6_Format,RGBA_ASTC_8x8_Format,RGBA_ASTC_10x5_Format,RGBA_ASTC_10x6_Format,RGBA_ASTC_10x8_Format,RGBA_ASTC_10x10_Format,RGBA_ASTC_12x10_Format,RGBA_ASTC_12x12_Format,RGBA_BPTC_Format,RGB_BPTC_SIGNED_Format,RGB_BPTC_UNSIGNED_Format,RED_RGTC1_Format,SIGNED_RED_RGTC1_Format,SIGNED_RED_GREEN_RGTC2_Format,ExternalTexture,EventDispatcher,PerspectiveCamera,ArrayCamera,WebXRController,RAD2DEG as Kn,DataTexture,createCanvasElement,SRGBColorSpace,REVISION,log,FrustumArray,WebGLCoordinateSystem,probeAsync as qn}from"./three.core.js";export{AdditiveAnimationBlendMode,AlwaysStencilFunc,AmbientLight,AnimationAction,AnimationClip,AnimationLoader,AnimationMixer,AnimationObjectGroup,AnimationUtils,ArcCurve,ArrowHelper,AttachedBindMode,Audio,AudioAnalyser,AudioContext,AudioListener,AudioLoader,AxesHelper,BasicDepthPacking,BasicShadowMap,BatchedMesh,BezierInterpolant,Bone,BooleanKeyframeTrack,Box2,Box3,Box3Helper,BoxHelper,BufferGeometryLoader,Cache,Camera,CameraHelper,CanvasTexture,CapsuleGeometry,CatmullRomCurve3,CircleGeometry,Clock,ColorKeyframeTrack,Compatibility,CompressedArrayTexture,CompressedCubeTexture,CompressedTexture,CompressedTextureLoader,ConeGeometry,Controls,CubeTextureLoader,CubicBezierCurve,CubicBezierCurve3,CubicInterpolant,CullFaceFrontBack,Curve,CurvePath,CylinderGeometry,Cylindrical,DataTextureLoader,DataUtils,DecrementStencilOp,DecrementWrapStencilOp,DefaultLoadingManager,DetachedBindMode,DirectionalLight,DirectionalLightHelper,DiscreteInterpolant,DodecahedronGeometry,DynamicCopyUsage,DynamicDrawUsage,DynamicReadUsage,EdgesGeometry,EllipseCurve,EqualStencilFunc,Euler,ExtrudeGeometry,FileLoader,Float16BufferAttribute,Fog,FogExp2,FramebufferTexture,GLBufferAttribute,GLSL1,GreaterEqualStencilFunc,GreaterStencilFunc,GridHelper,Group,HTMLTexture,HemisphereLight,HemisphereLightHelper,IcosahedronGeometry,ImageBitmapLoader,ImageLoader,ImageUtils,IncrementStencilOp,IncrementWrapStencilOp,InstancedBufferAttribute,InstancedBufferGeometry,InstancedInterleavedBuffer,InstancedMesh,Int16BufferAttribute,Int32BufferAttribute,Int8BufferAttribute,InterleavedBuffer,InterleavedBufferAttribute,Interpolant,InterpolateBezier,InterpolateDiscrete,InterpolateLinear,InterpolateSmooth,InterpolationSamplingMode,InterpolationSamplingType,InvertStencilOp,KeepStencilOp,KeyframeTrack,LOD,LatheGeometry,LessEqualStencilFunc,LessStencilFunc,Light,LightProbe,LightShadow,Line,Line3,LineBasicMaterial,LineCurve,LineCurve3,LineDashedMaterial,LineLoop,LineSegments,LinearInterpolant,LinearMipMapLinearFilter,LinearMipMapNearestFilter,Loader,LoaderUtils,LoadingManager,LoopOnce,LoopPingPong,LoopRepeat,MOUSE,Material,MaterialBlending,MaterialLoader,MathUtils,Matrix2,MeshBasicMaterial,MeshLambertMaterial,MeshMatcapMaterial,MeshNormalMaterial,MeshPhongMaterial,MeshPhysicalMaterial,MeshStandardMaterial,MeshToonMaterial,NearestMipMapLinearFilter,NearestMipMapNearestFilter,NeverStencilFunc,NoNormalPacking,NormalAnimationBlendMode,NormalGAPacking,NormalRGPacking,NotEqualStencilFunc,NumberKeyframeTrack,Object3D,ObjectLoader,OctahedronGeometry,Path,PlaneHelper,PointLight,PointLightHelper,Points,PointsMaterial,PolarGridHelper,PolyhedronGeometry,PositionalAudio,PropertyBinding,PropertyMixer,QuadraticBezierCurve,QuadraticBezierCurve3,Quaternion,QuaternionKeyframeTrack,QuaternionLinearInterpolant,RGBADepthPacking,RGBDepthPacking,RGBIntegerFormat,RGDepthPacking,Ray,Raycaster,RectAreaLight,RenderObjectRefreshType,RenderTarget,RenderTarget3D,ReplaceStencilOp,RingGeometry,Scene,ShadowMaterial,Shape,ShapeGeometry,ShapePath,ShapeUtils,Skeleton,SkeletonHelper,SkinnedMesh,Source,Sphere,SphereGeometry,Spherical,SphericalHarmonics3,SplineCurve,SpotLight,SpotLightHelper,Sprite,SpriteMaterial,StaticCopyUsage,StaticDrawUsage,StaticReadUsage,StereoCamera,StreamCopyUsage,StreamDrawUsage,StreamReadUsage,StringKeyframeTrack,TOUCH,TetrahedronGeometry,TextureLoader,TextureSource,TextureUtils,Timer,TimestampQuery,TorusGeometry,TorusKnotGeometry,Triangle,TriangleFanDrawMode,TriangleStripDrawMode,TrianglesDrawMode,TubeGeometry,UVMapping,Uint8BufferAttribute,Uint8ClampedBufferAttribute,Uniform,UniformsGroup,VectorKeyframeTrack,VideoFrameTexture,VideoTexture,WebGL3DRenderTarget,WebGLArrayRenderTarget,WebGPUCoordinateSystem,WireframeGeometry,WrapAroundEnding,ZeroCurvatureEnding,ZeroSlopeEnding,ZeroStencilOp,getConsoleFunction,setConsoleFunction}from"./three.core.js";function Jt(){let e=null,n=!1,t=null,i=null;function d(l,u){i=e.requestAnimationFrame(d);t(l,u)}return{start:function(){if(n===!0)return;if(t===null)return;if(e===null)return;i=e.requestAnimationFrame(d);n=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(i);n=!1},setAnimationLoop:function(l){t=l},setContext:function(l){e=l}}}function Yn(e){const n=new WeakMap;function t(m,G){const{array:b,usage:W}=m,I=b.byteLength,S=e.createBuffer();e.bindBuffer(G,S);e.bufferData(G,b,W);m.onUploadCallback();let T;if(b instanceof Float32Array)T=e.FLOAT;else if(typeof Float16Array<"u"&&b instanceof Float16Array)T=e.HALF_FLOAT;else if(b instanceof Uint16Array)if(m.isFloat16BufferAttribute)T=e.HALF_FLOAT;else T=e.UNSIGNED_SHORT;else if(b instanceof Int16Array)T=e.SHORT;else if(b instanceof Uint32Array)T=e.UNSIGNED_INT;else if(b instanceof Int32Array)T=e.INT;else if(b instanceof Int8Array)T=e.BYTE;else if(b instanceof Uint8Array)T=e.UNSIGNED_BYTE;else if(b instanceof Uint8ClampedArray)T=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+b);return{buffer:S,type:T,bytesPerElement:b.BYTES_PER_ELEMENT,version:m.version,size:I}}function i(m,G,b){const{array:W,updateRanges:I}=G;e.bindBuffer(b,m);if(I.length===0)e.bufferSubData(b,0,W);else{I.sort((T,P)=>T.start-P.start);let S=0;for(let T=1;T<I.length;T++){const P=I[S],O=I[T];if(O.start<=P.start+P.count+1)P.count=Math.max(P.count,O.start+O.count-P.start);else{++S;I[S]=O}}I.length=S+1;for(let T=0,P=I.length;T<P;T++){const O=I[T];e.bufferSubData(b,O.start*W.BYTES_PER_ELEMENT,W,O.start,O.count)}G.clearUpdateRanges()}G.onUploadCallback()}function d(m){if(m.isInterleavedBufferAttribute)m=m.data;return n.get(m)}function l(m){if(m.isInterleavedBufferAttribute)m=m.data;const G=n.get(m);if(G){e.deleteBuffer(G.buffer);n.delete(m)}}function u(m,G){if(m.isInterleavedBufferAttribute)m=m.data;if(m.isGLBufferAttribute){const W=n.get(m);if(!W||W.version<m.version)n.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const b=n.get(m);if(b===void 0)n.set(m,t(m,G));else if(b.version<m.version){if(b.size!==m.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(b.buffer,m,G);b.version=m.version}}return{get:d,remove:l,update:u}}var Zn=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$n=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qn=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jn=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jn=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ei=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ti=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ni=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ii=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ri=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ai=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oi=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,si=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,li=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ci=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fi=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,di=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ui=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pi=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hi=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mi=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_i=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gi=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vi=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Si=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ei=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mi=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xi=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ti=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ai="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ri=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ci=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bi=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Pi=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Li=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Di=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wi=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ui=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ni=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ii=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yi=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fi=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oi=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bi=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gi=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hi=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vi=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wi=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ki=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zi=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xi=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ki=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qi=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yi=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zi=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$i=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qi=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ji=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ji=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,er=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tr=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nr=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ir=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rr=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ar=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,or=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sr=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lr=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cr=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fr=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dr=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ur=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pr=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_r=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gr=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vr=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sr=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Er=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mr=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xr=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tr=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ar=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rr=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cr=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,br=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pr=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lr=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dr=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wr=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ur=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nr=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ir=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yr=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fr=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Or=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Br=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gr=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hr=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vr=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wr=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kr=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qr=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yr=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zr=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$r=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qr=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jr=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ea=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ta=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,na=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ia=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ra=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aa=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oa=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sa=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,la=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ca=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fa=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,da=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ua=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pa=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ha=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ma=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_a=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ga=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,va=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sa=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ea=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ma=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xa=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ta=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Aa=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ra=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ca=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ba=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphahash_fragment:Zn,alphahash_pars_fragment:$n,alphamap_fragment:Qn,alphamap_pars_fragment:Jn,alphatest_fragment:jn,alphatest_pars_fragment:ei,aomap_fragment:ti,aomap_pars_fragment:ni,batching_pars_vertex:ii,batching_vertex:ri,begin_vertex:ai,beginnormal_vertex:oi,bsdfs:si,iridescence_fragment:li,bumpmap_pars_fragment:ci,clipping_planes_fragment:fi,clipping_planes_pars_fragment:di,clipping_planes_pars_vertex:ui,clipping_planes_vertex:pi,color_fragment:hi,color_pars_fragment:mi,color_pars_vertex:_i,color_vertex:gi,common:vi,defaultnormal_vertex:Si,displacementmap_pars_vertex:Ei,displacementmap_vertex:Mi,emissivemap_fragment:xi,emissivemap_pars_fragment:Ti,colorspace_fragment:Ai,colorspace_pars_fragment:Ri,envmap_fragment:Ci,envmap_common_pars_fragment:bi,envmap_pars_fragment:Pi,envmap_pars_vertex:Li,envmap_physical_pars_fragment:Hi,envmap_vertex:Di,fog_vertex:wi,fog_pars_vertex:Ui,fog_fragment:Ni,fog_pars_fragment:Ii,gradientmap_pars_fragment:yi,lightmap_pars_fragment:Fi,lights_lambert_fragment:Oi,lights_lambert_pars_fragment:Bi,lights_pars_begin:Gi,lights_toon_fragment:Vi,lights_toon_pars_fragment:Wi,lights_phong_fragment:ki,lights_phong_pars_fragment:zi,lights_physical_fragment:Xi,lights_physical_pars_fragment:Ki,lights_fragment_begin:qi,lights_fragment_maps:Yi,lights_fragment_end:Zi,lightprobes_pars_fragment:$i,logdepthbuf_fragment:Qi,logdepthbuf_pars_fragment:Ji,logdepthbuf_pars_vertex:ji,logdepthbuf_vertex:er,map_fragment:tr,map_pars_fragment:nr,map_particle_fragment:ir,map_particle_pars_fragment:rr,metalnessmap_fragment:ar,metalnessmap_pars_fragment:or,morphinstance_vertex:sr,morphcolor_vertex:lr,morphnormal_vertex:cr,morphtarget_pars_vertex:fr,morphtarget_vertex:dr,normal_fragment_begin:ur,normal_fragment_maps:pr,normal_pars_fragment:hr,normal_pars_vertex:mr,normal_vertex:_r,normalmap_pars_fragment:gr,clearcoat_normal_fragment_begin:vr,clearcoat_normal_fragment_maps:Sr,clearcoat_pars_fragment:Er,iridescence_pars_fragment:Mr,opaque_fragment:xr,packing:Tr,premultiplied_alpha_fragment:Ar,project_vertex:Rr,dithering_fragment:Cr,dithering_pars_fragment:br,roughnessmap_fragment:Pr,roughnessmap_pars_fragment:Lr,shadowmap_pars_fragment:Dr,shadowmap_pars_vertex:wr,shadowmap_vertex:Ur,shadowmask_pars_fragment:Nr,skinbase_vertex:Ir,skinning_pars_vertex:yr,skinning_vertex:Fr,skinnormal_vertex:Or,specularmap_fragment:Br,specularmap_pars_fragment:Gr,tonemapping_fragment:Hr,tonemapping_pars_fragment:Vr,transmission_fragment:Wr,transmission_pars_fragment:kr,uv_pars_fragment:zr,uv_pars_vertex:Xr,uv_vertex:Kr,worldpos_vertex:qr,background_vert:Yr,background_frag:Zr,backgroundCube_vert:$r,backgroundCube_frag:Qr,cube_vert:Jr,cube_frag:jr,depth_vert:ea,depth_frag:ta,distance_vert:na,distance_frag:ia,equirect_vert:ra,equirect_frag:aa,linedashed_vert:oa,linedashed_frag:sa,meshbasic_vert:la,meshbasic_frag:ca,meshlambert_vert:fa,meshlambert_frag:da,meshmatcap_vert:ua,meshmatcap_frag:pa,meshnormal_vert:ha,meshnormal_frag:ma,meshphong_vert:_a,meshphong_frag:ga,meshphysical_vert:va,meshphysical_frag:Sa,meshtoon_vert:Ea,meshtoon_frag:Ma,points_vert:xa,points_frag:Ta,shadow_vert:Aa,shadow_frag:Ra,sprite_vert:Ca,sprite_frag:ba},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:ft([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:ft([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:ft([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:ft([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:ft([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:ft([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:ft([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:ft([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:ft([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:ft([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:ft([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distance:{uniforms:ft([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ShaderChunk.distance_vert,fragmentShader:ShaderChunk.distance_frag},shadow:{uniforms:ft([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:ft([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const Dt={r:0,b:0,g:0},Pa=new Matrix4,jt=new Matrix3;jt.set(-1,0,0,0,1,0,0,0,1);function La(e,n,t,i,d,l){const u=new Color(0);let m=d===!0?0:1,G,b,W=null,I=0,S=null;function T(v){let D=v.isScene===!0?v.background:null;if(D&&D.isTexture){const _=v.backgroundBlurriness>0;D=n.get(D,_)}return D}function P(v){let D=!1;const _=T(v);if(_===null)c(u,m);else if(_&&_.isColor){c(_,1);D=!0}const M=e.xr.getEnvironmentBlendMode();if(M==="additive")t.buffers.color.setClear(0,0,0,1,l);else if(M==="alpha-blend")t.buffers.color.setClear(0,0,0,0,l);if(e.autoClear||D){t.buffers.depth.setTest(!0);t.buffers.depth.setMask(!0);t.buffers.color.setMask(!0);e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}}function O(v,D){const _=T(D);if(_&&_.isCubeTexture){if(b===void 0){b=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:Ft(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1}));b.geometry.deleteAttribute("normal");b.geometry.deleteAttribute("uv");b.onBeforeRender=function(M,w,o){this.matrixWorld.copyPosition(o.matrixWorld)};Object.defineProperty(b.material,"envMap",{get:function(){return this.uniforms.envMap.value}});i.update(b)}b.material.uniforms.envMap.value=_;b.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness;b.material.uniforms.backgroundIntensity.value=D.backgroundIntensity;b.material.uniforms.backgroundRotation.value.setFromMatrix4(Pa.makeRotationFromEuler(D.backgroundRotation)).transpose();if(_.isRenderTargetTexture===!1)b.material.uniforms.backgroundRotation.value.premultiply(jt);b.material.toneMapped=ColorManagement.getTransfer(_.colorSpace)!==SRGBTransfer;if(W!==_||I!==_.version||S!==e.toneMapping){b.material.needsUpdate=!0;W=_;I=_.version;S=e.toneMapping}b.layers.enableAll();v.unshift(b,b.geometry,b.material,0,0,null)}else if(_&&_.isTexture){if(G===void 0){G=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:Ft(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1}));G.geometry.deleteAttribute("normal");Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}});i.update(G)}G.material.uniforms.t2D.value=_;G.material.uniforms.backgroundIntensity.value=D.backgroundIntensity;G.material.toneMapped=ColorManagement.getTransfer(_.colorSpace)!==SRGBTransfer;if(_.matrixAutoUpdate===!0)_.updateMatrix();G.material.uniforms.uvTransform.value.copy(_.matrix);if(W!==_||I!==_.version||S!==e.toneMapping){G.material.needsUpdate=!0;W=_;I=_.version;S=e.toneMapping}G.layers.enableAll();v.unshift(G,G.geometry,G.material,0,0,null)}}function c(v,D){v.getRGB(Dt,$t(e));t.buffers.color.setClear(Dt.r,Dt.g,Dt.b,D,l)}function s(){if(b!==void 0){b.geometry.dispose();b.material.dispose();b=void 0}if(G!==void 0){G.geometry.dispose();G.material.dispose();G=void 0}}return{getClearColor:function(){return u},setClearColor:function(v,D=1){u.set(v);m=D;c(u,m)},getClearAlpha:function(){return m},setClearAlpha:function(v){m=v;c(u,m)},render:P,addToRenderList:O,dispose:s}}function Da(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},d=S(null);let l=d,u=!1;function m(L,k,le,x,Y){let Q=!1;const y=I(L,x,le,k);if(l!==y){l=y;b(l.object)}Q=T(L,x,le,Y);if(Q)P(L,x,le,Y);if(Y!==null)n.update(Y,e.ELEMENT_ARRAY_BUFFER);if(Q||u){u=!1;_(L,k,le,x);if(Y!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer)}}function G(){return e.createVertexArray()}function b(L){return e.bindVertexArray(L)}function W(L){return e.deleteVertexArray(L)}function I(L,k,le,x){const Y=x.wireframe===!0;let Q=i[k.id];if(Q===void 0){Q={};i[k.id]=Q}const y=L.isInstancedMesh===!0?L.id:0;let ge=Q[y];if(ge===void 0){ge={};Q[y]=ge}let K=ge[le.id];if(K===void 0){K={};ge[le.id]=K}let J=K[Y];if(J===void 0){J=S(G());K[Y]=J}return J}function S(L){const k=[],le=[],x=[];for(let Y=0;Y<t;Y++){k[Y]=0;le[Y]=0;x[Y]=0}return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:le,attributeDivisors:x,object:L,attributes:{},index:null}}function T(L,k,le,x){const Y=l.attributes,Q=k.attributes;let y=0;const ge=le.getAttributes();for(const K in ge)if(ge[K].location>=0){const ce=Y[K];let Ae=Q[K];if(Ae===void 0){if(K==="instanceMatrix"&&L.instanceMatrix)Ae=L.instanceMatrix;if(K==="instanceColor"&&L.instanceColor)Ae=L.instanceColor}if(ce===void 0)return!0;if(ce.attribute!==Ae)return!0;if(Ae&&ce.data!==Ae.data)return!0;y++}if(l.attributesNum!==y)return!0;if(l.index!==x)return!0;return!1}function P(L,k,le,x){const Y={},Q=k.attributes;let y=0;const ge=le.getAttributes();for(const K in ge)if(ge[K].location>=0){let ce=Q[K];if(ce===void 0){if(K==="instanceMatrix"&&L.instanceMatrix)ce=L.instanceMatrix;if(K==="instanceColor"&&L.instanceColor)ce=L.instanceColor}const Ae={};Ae.attribute=ce;if(ce&&ce.data)Ae.data=ce.data;Y[K]=Ae;y++}l.attributes=Y;l.attributesNum=y;l.index=x}function O(){const L=l.newAttributes;for(let k=0,le=L.length;k<le;k++)L[k]=0}function c(L){s(L,0)}function s(L,k){const le=l.newAttributes,x=l.enabledAttributes,Y=l.attributeDivisors;le[L]=1;if(x[L]===0){e.enableVertexAttribArray(L);x[L]=1}if(Y[L]!==k){e.vertexAttribDivisor(L,k);Y[L]=k}}function v(){const L=l.newAttributes,k=l.enabledAttributes;for(let le=0,x=k.length;le<x;le++)if(k[le]!==L[le]){e.disableVertexAttribArray(le);k[le]=0}}function D(L,k,le,x,Y,Q,y){if(y===!0)e.vertexAttribIPointer(L,k,le,Y,Q);else e.vertexAttribPointer(L,k,le,x,Y,Q)}function _(L,k,le,x){O();const Y=x.attributes,Q=le.getAttributes(),y=k.defaultAttributeValues;for(const ge in Q){const K=Q[ge];if(K.location>=0){let J=Y[ge];if(J===void 0){if(ge==="instanceMatrix"&&L.instanceMatrix)J=L.instanceMatrix;if(ge==="instanceColor"&&L.instanceColor)J=L.instanceColor}if(J!==void 0){const ce=J.normalized,Ae=J.itemSize,X=n.get(J);if(X===void 0)continue;const{buffer:ne,type:Se,bytesPerElement:Ce}=X,be=Se===e.INT||Se===e.UNSIGNED_INT||J.gpuType===IntType;if(J.isInterleavedBufferAttribute){const Me=J.data,ze=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,Ie=J.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let we=0;we<K.locationSize;we++)s(K.location+we,Me.meshPerAttribute);if(L.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=Me.meshPerAttribute*Me.count}else for(let we=0;we<K.locationSize;we++)c(K.location+we);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let we=0;we<K.locationSize;we++)D(K.location+we,Ae/K.locationSize,Se,ce,ze*Ce,(Ie+Ae/K.locationSize*we)*Ce,be)}else{if(J.isInstancedBufferAttribute){for(let Me=0;Me<K.locationSize;Me++)s(K.location+Me,J.meshPerAttribute);if(L.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=J.meshPerAttribute*J.count}else for(let Me=0;Me<K.locationSize;Me++)c(K.location+Me);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let Me=0;Me<K.locationSize;Me++)D(K.location+Me,Ae/K.locationSize,Se,ce,Ae*Ce,Ae/K.locationSize*Me*Ce,be)}}else if(y!==void 0){const ce=y[ge];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(K.location,ce);break;case 3:e.vertexAttrib3fv(K.location,ce);break;case 4:e.vertexAttrib4fv(K.location,ce);break;default:e.vertexAttrib1fv(K.location,ce)}}}}v()}function M(){U();for(const L in i){const k=i[L];for(const le in k){const x=k[le];for(const Y in x){const Q=x[Y];for(const y in Q){W(Q[y].object);delete Q[y]}delete x[Y]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const k=i[L.id];for(const le in k){const x=k[le];for(const Y in x){const Q=x[Y];for(const y in Q){W(Q[y].object);delete Q[y]}delete x[Y]}}delete i[L.id]}function o(L){for(const k in i){const le=i[k];for(const x in le){const Y=le[x];if(Y[L.id]===void 0)continue;const Q=Y[L.id];for(const y in Q){W(Q[y].object);delete Q[y]}delete Y[L.id]}}}function p(L){for(const k in i){const le=i[k],x=L.isInstancedMesh===!0?L.id:0,Y=le[x];if(Y===void 0)continue;for(const Q in Y){const y=Y[Q];for(const ge in y){W(y[ge].object);delete y[ge]}delete Y[Q]}delete le[x];if(Object.keys(le).length===0)delete i[k]}}function U(){q();u=!0;if(l===d)return;l=d;b(l.object)}function q(){d.geometry=null;d.program=null;d.wireframe=!1}return{setup:m,reset:U,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:p,releaseStatesOfProgram:o,initAttributes:O,enableAttribute:c,disableUnusedAttributes:v}}function wa(e,n,t){let i;function d(G){i=G}function l(G,b){e.drawArrays(i,G,b);t.update(b,i,1)}function u(G,b,W){if(W===0)return;e.drawArraysInstanced(i,G,b,W);t.update(b,i,W)}function m(G,b,W){if(W===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,G,0,b,0,W);let S=0;for(let T=0;T<W;T++)S+=b[T];t.update(S,i,1)}this.setMode=d;this.render=l;this.renderInstances=u;this.renderMultiDraw=m}function Ua(e,n,t,i){let d;function l(){if(d!==void 0)return d;if(n.has("EXT_texture_filter_anisotropic")===!0){const o=n.get("EXT_texture_filter_anisotropic");d=e.getParameter(o.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else d=0;return d}function u(o){if(o!==RGBAFormat&&i.convert(o)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function m(o){const p=o===HalfFloatType&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));if(o!==UnsignedByteType&&o!==FloatType&&!p&&i.convert(o)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function G(o){if(o==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";o="mediump"}if(o==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let b=t.precision!==void 0?t.precision:"highp";const W=G(b);if(W!==b){warn("WebGLRenderer:",b,"not supported, using",W,"instead.");b=W}const I=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),S=t.logarithmicDepthBuffer===!0&&I===!1;if(t.reversedDepthBuffer===!0&&I===!1)warn("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(t.logarithmicDepthBuffer===!0&&I===!0)warn("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const T=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),P=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),O=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),s=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),D=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:G,textureFormatReadable:u,textureTypeReadable:m,precision:b,logarithmicDepthBuffer:S,reversedDepthBuffer:I,maxTextures:T,maxVertexTextures:P,maxTextureSize:O,maxCubemapSize:c,maxAttributes:s,maxVertexUniforms:v,maxVaryings:D,maxFragmentUniforms:_,maxSamples:M,samples:w}}function Na(e){const n=this;let t=null,i=0,d=!1,l=!1;const u=new Plane,m=new Matrix3,G={value:null,needsUpdate:!1};this.uniform=G;this.numPlanes=0;this.numIntersection=0;this.init=function(I,S){const T=I.length!==0||S||i!==0||d;d=S;i=I.length;return T};this.beginShadows=function(){l=!0;W(null)};this.endShadows=function(){l=!1};this.setGlobalState=function(I,S){t=W(I,S,0)};this.setState=function(I,S,T){const{clippingPlanes:P,clipIntersection:O,clipShadows:c}=I,s=e.get(I);if(!d||P===null||P.length===0||l&&!c)if(l)W(null);else b();else{const v=l?0:i,D=v*4;let _=s.clippingState||null;G.value=_;_=W(P,S,D,T);for(let M=0;M!==D;++M)_[M]=t[M];s.clippingState=_;this.numIntersection=O?this.numPlanes:0;this.numPlanes+=v}};function b(){if(G.value!==t){G.value=t;G.needsUpdate=i>0}n.numPlanes=i;n.numIntersection=0}function W(I,S,T,P){const O=I!==null?I.length:0;let c=null;if(O!==0){c=G.value;if(P!==!0||c===null){const s=T+O*4,v=S.matrixWorldInverse;m.getNormalMatrix(v);if(c===null||c.length<s)c=new Float32Array(s);for(let D=0,_=T;D!==O;++D,_+=4){u.copy(I[D]).applyMatrix4(v,m);u.normal.toArray(c,_);c[_+3]=u.constant}}G.value=c;G.needsUpdate=!0}n.numPlanes=O;n.numIntersection=0;return c}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,n={}){super(e,e,n);this.isWebGLCubeRenderTarget=!0;const t={width:e,height:e,depth:1},i=[t,t,t,t,t,t];this.texture=new CubeTexture(i);this._setTextureOptions(n);this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type;this.texture.colorSpace=n.colorSpace;this.texture.generateMipmaps=n.generateMipmaps;this.texture.minFilter=n.minFilter;this.texture.magFilter=n.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new BoxGeometry(5,5,5),d=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:Ft(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:BackSide,blending:NoBlending});d.uniforms.tEquirect.value=n;const l=new Mesh(i,d),u=n.minFilter;if(n.minFilter===LinearMipmapLinearFilter)n.minFilter=LinearFilter;new CubeCamera(1,10,this).update(e,l);n.minFilter=u;l.geometry.dispose();l.material.dispose();return this}clear(e,n=!0,t=!0,i=!0){const d=e.getRenderTarget();for(let l=0;l<6;l++){e.setRenderTarget(this,l);e.clear(n,t,i)}e.setRenderTarget(d)}}const en=256,Ia=3,ya=20,tn=256,nn=16,Fa=3,Oa=new Vector3,Ba=new Color;class PMREMGenerator{constructor(e){this._renderer=e;this._cubeSize=0;this._sourceTarget=null;this._cubeCamera=new CubeCamera(1,10,null);this._boxMesh=new Mesh(new BoxGeometry(5,5,5),null);this._cubemapMaterial=null;this._equirectMaterial=null;this._blurMaterial=null;this._ggxMaterial=null;this._integrationMaterial=null}fromScene(e,n=0,t=0.1,i=100,d={}){const{size:l=256,position:u=Oa}=d,m=this._renderer;this._setSize(l);const G=this._allocateTarget(),b=this._getSourceTarget(!0);if(n>0)b.texture.mipmapsAutoUpdate=!1;const{autoClear:W,autoClearColor:I,autoClearDepth:S,autoClearStencil:T}=m,P=e.background;m.autoClear=!0;m.autoClearColor=!0;m.autoClearDepth=!0;m.autoClearStencil=!0;if(P===null)e.background=m.getClearColor(Ba);const O=new CubeCamera(t,i,b);O.position.copy(u);O.update(m,e);m.autoClear=W;m.autoClearColor=I;m.autoClearDepth=S;m.autoClearStencil=T;e.background=P;if(n>0){b.texture.mipmapsAutoUpdate=!0;this._blur(G,n)}this._applyPMREM(G);return G}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){if(this._cubemapMaterial===null){this._cubemapMaterial=on();this._compileMaterial(this._cubemapMaterial)}}compileEquirectangularShader(){if(this._equirectMaterial===null){this._equirectMaterial=an();this._compileMaterial(this._equirectMaterial)}}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(en,kn(e))}_fromTexture(e,n){if(e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping)this._setSize(e.image.length===0?en:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);const t=n||this._allocateTarget();this._textureToCubemap(e);this._applyPMREM(t);return t}_allocateTarget(){const e=this._cubeSize,n=rn(e,!1,!1),t=Math.log2(e)-Ia;for(let i=0;i<=t;i++)n.texture.mipmaps.push({width:e>>i,height:e>>i});n.texture.name="PMREM";n.texture.isPMREMTexture=!0;return n}_getSourceTarget(e=!1){const n=this._cubeSize,t=this._sourceTarget;if(t===null||t.width!==n||e&&t.depthBuffer===!1){if(t!==null)t.dispose();this._sourceTarget=rn(n,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e;this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,t){const i=this._boxMesh,d=this._cubeCamera;i.material=t;d.renderTarget=e;d.activeMipmapLevel=n;const l=e.width>>n;e.viewport.set(0,0,l,l);d.update(this._renderer,i);e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;if(e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping){if(this._cubemapMaterial===null)this._cubemapMaterial=on();n=this._cubemapMaterial;n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=an();n=this._equirectMaterial}n.uniforms.envMap.value=e;this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){if(this._ggxMaterial===null){this._ggxMaterial=Ga();this._integrationMaterial=Ha()}const n=this._cubeSize,t=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const d=this._integrationMaterial.uniforms;d.envMap.value=this._sourceTarget.texture;d.sourceLod.value=Math.log2(n/nn);for(let l=0;l<=t;l++){const u=PMREMGenerator.lodToRoughness(l,t);if(l>t-Fa){d.roughness.value=u;this._renderCube(e,l,this._integrationMaterial)}else{const m=u>0?Math.log2(n)+0.5*Math.log2(6/(tn*Math.pow(u,4)))+0.5:0;i.roughness.value=u;i.lodBias.value=m;this._renderCube(e,l,this._ggxMaterial)}}}_blur(e,n){if(this._blurMaterial===null)this._blurMaterial=Va();const t=this._blurMaterial,i=t.uniforms,d=this._sourceTarget;i.sigma.value=Math.min(n,Math.PI)/Math.SQRT2;i.envMap.value=d.texture;this._renderCube(e,0,t);i.envMap.value=e.texture;this._renderCube(d,0,t)}}function rn(e,n,t){return new WebGLCubeRenderTarget(e,{minFilter:LinearMipmapLinearFilter,generateMipmaps:n,type:HalfFloatType,colorSpace:LinearSRGBColorSpace,depthBuffer:t})}function At(e,n,t){return new ShaderMaterial({name:e,uniforms:n,vertexShader:ShaderChunk.cube_vert,fragmentShader:t,side:BackSide,blending:NoBlending,depthTest:!1,depthWrite:!1})}function Ga(){return At("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tn}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ha(){return At("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nn}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Va(){return At("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ya}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function an(){return At("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function on(){return At("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Wa(e){let n=new WeakMap,t=new WeakMap,i=null;function d(S,T=!1){if(S===null||S===void 0)return null;if(T)return u(S);return l(S)}function l(S){if(S&&S.isTexture){const T=S.mapping;if(T===EquirectangularReflectionMapping||T===EquirectangularRefractionMapping)if(n.has(S)){const P=n.get(S).texture;return m(P,S.mapping)}else{const P=S.image;if(P&&P.height>0){const O=new WebGLCubeRenderTarget(P.height);O.fromEquirectangularTexture(e,S);n.set(S,O);S.addEventListener("dispose",b);return m(O.texture,S.mapping)}else return null}}return S}function u(S){if(S&&S.isTexture&&S.isPMREMTexture!==!0){const T=S.mapping,P=T===EquirectangularReflectionMapping||T===EquirectangularRefractionMapping,O=T===CubeReflectionMapping||T===CubeRefractionMapping;if(P||O){let c=t.get(S);const s=c!==void 0?c.texture.pmremVersion:0;if(S.isRenderTargetTexture&&S.pmremVersion!==s){if(i===null)i=new PMREMGenerator(e);c=P?i.fromEquirectangular(S,c):i.fromCubemap(S,c);c.texture.pmremVersion=S.pmremVersion;t.set(S,c);return c.texture}else if(c!==void 0)return c.texture;else{const v=S.image;if(P&&v&&v.height>0||O&&v&&G(v)){if(i===null)i=new PMREMGenerator(e);c=P?i.fromEquirectangular(S):i.fromCubemap(S);c.texture.pmremVersion=S.pmremVersion;t.set(S,c);S.addEventListener("dispose",W);return c.texture}else return null}}}return S}function m(S,T){if(T===EquirectangularReflectionMapping)S.mapping=CubeReflectionMapping;else if(T===EquirectangularRefractionMapping)S.mapping=CubeRefractionMapping;return S}function G(S){let T=0;const P=6;for(let O=0;O<P;O++)if(S[O]!==void 0)T++;return T===P}function b(S){const T=S.target;T.removeEventListener("dispose",b);const P=n.get(T);if(P!==void 0){n.delete(T);P.dispose()}}function W(S){const T=S.target;T.removeEventListener("dispose",W);const P=t.get(T);if(P!==void 0){t.delete(T);P.dispose()}}function I(){n=new WeakMap;t=new WeakMap;if(i!==null){i.dispose();i=null}}return{get:d,dispose:I}}function ka(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const d=e.getExtension(i);n[i]=d;return d}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float");t("WEBGL_clip_cull_distance");t("OES_texture_float_linear");t("EXT_color_buffer_half_float");t("WEBGL_multisampled_render_to_texture");t("WEBGL_render_shared_exponent")},get:function(i){const d=t(i);if(d===null)warnOnce("WebGLRenderer: "+i+" extension not supported.");return d}}}function za(e,n,t,i){const d={},l=new WeakMap,u=new FinalizationRegistry((P)=>delete d[P]);function m(P){G(P.target)}function G(P){if(P.index!==null)n.remove(P.index);for(const c in P.attributes)n.remove(P.attributes[c]);P.removeEventListener("dispose",m);delete d[P.id];u.unregister(P);const O=l.get(P);if(O){n.remove(O);l.delete(P)}i.releaseStatesOfGeometry(P);if(P.isInstancedBufferGeometry===!0)delete P._maxInstanceCount;t.memory.geometries--}function b(P,O){if(d[O.id]!==void 0)return O;O.addEventListener("dispose",m);d[O.id]=new WeakRef(O);u.register(O,O.id,O);t.memory.geometries++;return O}function W(P){const O=P.attributes;for(const c in O)n.update(O[c],e.ARRAY_BUFFER)}function I(P){const O=P.index,c=P.attributes.position;let s=0;if(c===void 0)return;const v=O!==null?O.array.length:c.array.length/3-1,_=new(c.count>=65535?Uint32BufferAttribute:Uint16BufferAttribute)(Math.ceil(v/3)*6,1),M=_.array;if(O!==null){const o=O.array;s=O.version;for(let p=0,U=0;p<v;p+=3){const q=o[p+0],L=o[p+1],k=o[p+2];M[U++]=q;M[U++]=L;M[U++]=L;M[U++]=k;M[U++]=k;M[U++]=q}}else{s=c.version;for(let o=0,p=0;o<v;o+=3){const U=o+0,q=o+1,L=o+2;M[p++]=U;M[p++]=q;M[p++]=q;M[p++]=L;M[p++]=L;M[p++]=U}}_.version=s;const w=l.get(P);if(w)n.remove(w);l.set(P,_)}function S(P){const O=l.get(P);if(O){const c=P.index;if(c!==null){if(O.version<c.version)I(P)}}else I(P);return l.get(P)}function T(){for(const P in d){const O=d[P].deref();if(O!==void 0)G(O)}}return{get:b,update:W,getWireframeAttribute:S,dispose:T}}function Xa(e,n,t){let i;function d(I){i=I}let l,u;function m(I){l=I.type;u=I.bytesPerElement}function G(I,S){e.drawElements(i,S,l,I*u);t.update(S,i,1)}function b(I,S,T){if(T===0)return;e.drawElementsInstanced(i,S,l,I*u,T);t.update(S,i,T)}function W(I,S,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,l,I,0,T);let O=0;for(let c=0;c<T;c++)O+=S[c];t.update(O,i,1)}this.setMode=d;this.setIndex=m;this.render=G;this.renderInstances=b;this.renderMultiDraw=W}function Ka(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,m){t.calls++;switch(u){case e.TRIANGLES:t.triangles+=m*(l/3);break;case e.LINES:t.lines+=m*(l/2);break;case e.LINE_STRIP:t.lines+=m*(l-1);break;case e.LINE_LOOP:t.lines+=m*l;break;case e.POINTS:t.points+=m*l;break;default:error("WebGLInfo: Unknown draw mode:",u);break}}function d(){t.calls=0;t.triangles=0;t.points=0;t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:d,update:i}}function qa(e,n,t){const i=new WeakMap,d=new Vector4;function l(u,m,G){const b=u.morphTargetInfluences,W=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,I=W!==void 0?W.length:0;let S=i.get(m);if(S===void 0||S.count!==I){let U=function(){o.dispose();i.delete(m);m.removeEventListener("dispose",U)};if(S!==void 0)S.texture.dispose();const T=m.morphAttributes.position!==void 0,P=m.morphAttributes.normal!==void 0,O=m.morphAttributes.color!==void 0,c=m.morphAttributes.position||[],s=m.morphAttributes.normal||[],v=m.morphAttributes.color||[];let D=0;if(T===!0)D=1;if(P===!0)D=2;if(O===!0)D=3;let _=m.attributes.position.count*D,M=1;if(_>n.maxTextureSize){M=Math.ceil(_/n.maxTextureSize);_=n.maxTextureSize}const w=new Float32Array(_*M*4*I),o=new DataArrayTexture(w,_,M,I);o.type=FloatType;o.needsUpdate=!0;const p=D*4;for(let q=0;q<I;q++){const L=c[q],k=s[q],le=v[q],x=_*M*4*q;for(let Y=0;Y<L.count;Y++){const Q=Y*p;if(T===!0){d.fromBufferAttribute(L,Y);w[x+Q+0]=d.x;w[x+Q+1]=d.y;w[x+Q+2]=d.z;w[x+Q+3]=0}if(P===!0){d.fromBufferAttribute(k,Y);w[x+Q+4]=d.x;w[x+Q+5]=d.y;w[x+Q+6]=d.z;w[x+Q+7]=0}if(O===!0){d.fromBufferAttribute(le,Y);w[x+Q+8]=d.x;w[x+Q+9]=d.y;w[x+Q+10]=d.z;w[x+Q+11]=le.itemSize===4?d.w:1}}}S={count:I,texture:o,size:new Vector2(_,M)};i.set(m,S);m.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)G.getUniforms().setValue(e,"morphTexture",u.morphTexture,t);else{let T=0;for(let O=0;O<b.length;O++)T+=b[O];const P=m.morphTargetsRelative?1:1-T;G.getUniforms().setValue(e,"morphTargetBaseInfluence",P);G.getUniforms().setValue(e,"morphTargetInfluences",b)}G.getUniforms().setValue(e,"morphTargetsTexture",S.texture,t);G.getUniforms().setValue(e,"morphTargetsTextureSize",S.size)}return{update:l}}function Ya(e,n,t,i,d){let l=new WeakMap;function u(b){const W=d.render.frame,I=b.geometry,S=n.get(b,I);if(l.get(S)!==W){n.update(S);l.set(S,W)}if(b.isInstancedMesh){if(b.hasEventListener("dispose",G)===!1)b.addEventListener("dispose",G);if(l.get(b)!==W){t.update(b.instanceMatrix,e.ARRAY_BUFFER);if(b.instanceColor!==null)t.update(b.instanceColor,e.ARRAY_BUFFER);l.set(b,W)}}if(b.isSkinnedMesh){const T=b.skeleton;if(l.get(T)!==W){T.update();l.set(T,W)}}return S}function m(){l=new WeakMap}function G(b){const W=b.target;W.removeEventListener("dispose",G);i.releaseStatesOfObject(W);t.remove(W.instanceMatrix);if(W.instanceColor!==null)t.remove(W.instanceColor)}return{update:u,dispose:m}}const Za={[LinearToneMapping]:"LINEAR_TONE_MAPPING",[ReinhardToneMapping]:"REINHARD_TONE_MAPPING",[CineonToneMapping]:"CINEON_TONE_MAPPING",[ACESFilmicToneMapping]:"ACES_FILMIC_TONE_MAPPING",[AgXToneMapping]:"AGX_TONE_MAPPING",[NeutralToneMapping]:"NEUTRAL_TONE_MAPPING",[CustomToneMapping]:"CUSTOM_TONE_MAPPING"};function $a(e,n,t,i,d,l){const u=new WebGLRenderTarget(n,t,{type:e,depthBuffer:d,stencilBuffer:l,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let m=null,G=null,b=null;const W=new BufferGeometry;W.setAttribute("position",new Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));W.setAttribute("uv",new Float32BufferAttribute([0,2,0,0,2,0],2));const I=new RawShaderMaterial({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new Mesh(W,I),T=new OrthographicCamera(-1,1,1,-1,0,1);let P=null,O=null,c=!1,s,v=null,D=[],_=!1;this.setSize=function(M,w){u.setSize(M,w);if(m!==null)m.setSize(M,w);if(G!==null)G.setSize(M,w);for(let o=0;o<D.length;o++){const p=D[o];if(p.setSize)p.setSize(M,w)}};this.setEffects=function(M){D=M;_=D.length>0&&D[0].isRenderPass===!0;const{width:w,height:o}=u;if(D.length>0&&m===null){m=new WebGLRenderTarget(w,o,{type:HalfFloatType,depthBuffer:!1,stencilBuffer:!1});G=new WebGLRenderTarget(w,o,{type:HalfFloatType,depthBuffer:!1,stencilBuffer:!1})}const p=d===!0&&D.some((U)=>U.needsDepthTexture===!0);if(p!==(u.depthTexture!==null)){if(p===!0&&b===null){b=new DepthTexture(w,o);if(l===!0){b.format=DepthStencilFormat;b.type=UnsignedInt248Type}}u.dispose();u.depthTexture=p?b:null;u.resolveDepthBuffer=p;u.storeMultisampledDepthBuffer=p}for(let U=0;U<D.length;U++){const q=D[U];if(q.setSize)q.setSize(w,o);if(p&&q.needsDepthTexture===!0&&q.setDepthTexture)q.setDepthTexture(b)}};this.begin=function(M,w){if(c)return!1;if(M.toneMapping===NoToneMapping&&D.length===0)return!1;v=w;if(w!==null){const{width:o,height:p}=w;if(u.width!==o||u.height!==p)this.setSize(o,p)}if(_===!1)M.setRenderTarget(u);s=M.toneMapping;M.toneMapping=NoToneMapping;return!0};this.hasRenderPass=function(){return _};this.end=function(M,w){M.toneMapping=s;c=!0;let o=u,p=m;for(let U=0;U<D.length;U++){const q=D[U];if(q.enabled===!1)continue;q.render(M,p,o,w);if(q.needsSwap!==!1){o=p;p=p===m?G:m}}if(P!==M.outputColorSpace||O!==M.toneMapping){P=M.outputColorSpace;O=M.toneMapping;I.defines={};if(ColorManagement.getTransfer(P)===SRGBTransfer)I.defines.SRGB_TRANSFER="";const U=Za[O];if(U)I.defines[U]="";I.needsUpdate=!0}I.uniforms.tDiffuse.value=o.texture;M.setRenderTarget(v);M.render(S,T);v=null;c=!1};this.isCompositing=function(){return c};this.dispose=function(){u.dispose();if(m!==null)m.dispose();if(G!==null)G.dispose();W.dispose();I.dispose()}}const sn=new Texture,ln=new DepthTexture(1,1),cn=new CubeDepthTexture(1),fn=new DataArrayTexture,dn=new Data3DTexture,un=new CubeTexture,pn=[],hn=[],mn=new Float32Array(16),_n=new Float32Array(9),gn=new Float32Array(4);function xt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const d=n*t;let l=pn[d];if(l===void 0){l=new Float32Array(d);pn[d]=l}if(n!==0){i.toArray(l,0);for(let u=1,m=0;u!==n;++u){m+=t;e[u].toArray(l,m)}}return l}function $e(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function Qe(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function wt(e,n){let t=hn[n];if(t===void 0){t=new Int32Array(n);hn[n]=t}for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Qa(e,n){const t=this.cache;if(t[0]===n)return;e.uniform1f(this.addr,n);t[0]=n}function Ja(e,n){const t=this.cache;if(n.x!==void 0){if(t[0]!==n.x||t[1]!==n.y){e.uniform2f(this.addr,n.x,n.y);t[0]=n.x;t[1]=n.y}}else{if($e(t,n))return;e.uniform2fv(this.addr,n);Qe(t,n)}}function ja(e,n){const t=this.cache;if(n.x!==void 0){if(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z){e.uniform3f(this.addr,n.x,n.y,n.z);t[0]=n.x;t[1]=n.y;t[2]=n.z}}else if(n.r!==void 0){if(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b){e.uniform3f(this.addr,n.r,n.g,n.b);t[0]=n.r;t[1]=n.g;t[2]=n.b}}else{if($e(t,n))return;e.uniform3fv(this.addr,n);Qe(t,n)}}function eo(e,n){const t=this.cache;if(n.x!==void 0){if(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w){e.uniform4f(this.addr,n.x,n.y,n.z,n.w);t[0]=n.x;t[1]=n.y;t[2]=n.z;t[3]=n.w}}else{if($e(t,n))return;e.uniform4fv(this.addr,n);Qe(t,n)}}function to(e,n){const t=this.cache,i=n.elements;if(i===void 0){if($e(t,n))return;e.uniformMatrix2fv(this.addr,!1,n);Qe(t,n)}else{if($e(t,i))return;gn.set(i);e.uniformMatrix2fv(this.addr,!1,gn);Qe(t,i)}}function no(e,n){const t=this.cache,i=n.elements;if(i===void 0){if($e(t,n))return;e.uniformMatrix3fv(this.addr,!1,n);Qe(t,n)}else{if($e(t,i))return;_n.set(i);e.uniformMatrix3fv(this.addr,!1,_n);Qe(t,i)}}function io(e,n){const t=this.cache,i=n.elements;if(i===void 0){if($e(t,n))return;e.uniformMatrix4fv(this.addr,!1,n);Qe(t,n)}else{if($e(t,i))return;mn.set(i);e.uniformMatrix4fv(this.addr,!1,mn);Qe(t,i)}}function ro(e,n){const t=this.cache;if(t[0]===n)return;e.uniform1i(this.addr,n);t[0]=n}function ao(e,n){const t=this.cache;if(n.x!==void 0){if(t[0]!==n.x||t[1]!==n.y){e.uniform2i(this.addr,n.x,n.y);t[0]=n.x;t[1]=n.y}}else{if($e(t,n))return;e.uniform2iv(this.addr,n);Qe(t,n)}}function oo(e,n){const t=this.cache;if(n.x!==void 0){if(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z){e.uniform3i(this.addr,n.x,n.y,n.z);t[0]=n.x;t[1]=n.y;t[2]=n.z}}else{if($e(t,n))return;e.uniform3iv(this.addr,n);Qe(t,n)}}function so(e,n){const t=this.cache;if(n.x!==void 0){if(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w){e.uniform4i(this.addr,n.x,n.y,n.z,n.w);t[0]=n.x;t[1]=n.y;t[2]=n.z;t[3]=n.w}}else{if($e(t,n))return;e.uniform4iv(this.addr,n);Qe(t,n)}}function lo(e,n){const t=this.cache;if(t[0]===n)return;e.uniform1ui(this.addr,n);t[0]=n}function co(e,n){const t=this.cache;if(n.x!==void 0){if(t[0]!==n.x||t[1]!==n.y){e.uniform2ui(this.addr,n.x,n.y);t[0]=n.x;t[1]=n.y}}else{if($e(t,n))return;e.uniform2uiv(this.addr,n);Qe(t,n)}}function fo(e,n){const t=this.cache;if(n.x!==void 0){if(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z){e.uniform3ui(this.addr,n.x,n.y,n.z);t[0]=n.x;t[1]=n.y;t[2]=n.z}}else{if($e(t,n))return;e.uniform3uiv(this.addr,n);Qe(t,n)}}function uo(e,n){const t=this.cache;if(n.x!==void 0){if(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w){e.uniform4ui(this.addr,n.x,n.y,n.z,n.w);t[0]=n.x;t[1]=n.y;t[2]=n.z;t[3]=n.w}}else{if($e(t,n))return;e.uniform4uiv(this.addr,n);Qe(t,n)}}function Ut(e){if(e.version===0){e.compareFunction=AlwaysCompare;e.needsUpdate=!0}return e}function po(e,n,t){const i=this.cache,d=t.allocateTextureUnit();if(i[0]!==d){e.uniform1i(this.addr,d);i[0]=d}let l;if(this.type===e.SAMPLER_2D_SHADOW)l=Ut(ln);else l=sn;t.setTexture2D(n||l,d)}function ho(e,n,t){const i=this.cache,d=t.allocateTextureUnit();if(i[0]!==d){e.uniform1i(this.addr,d);i[0]=d}t.setTexture3D(n||dn,d)}function mo(e,n,t){const i=this.cache,d=t.allocateTextureUnit();if(i[0]!==d){e.uniform1i(this.addr,d);i[0]=d}let l;if(this.type===e.SAMPLER_CUBE_SHADOW)l=Ut(cn);else l=un;t.setTextureCube(n||l,d)}function _o(e,n,t){const i=this.cache,d=t.allocateTextureUnit();if(i[0]!==d){e.uniform1i(this.addr,d);i[0]=d}t.setTexture2DArray(n||fn,d)}function go(e){switch(e){case 5126:return Qa;case 35664:return Ja;case 35665:return ja;case 35666:return eo;case 35674:return to;case 35675:return no;case 35676:return io;case 5124:case 35670:return ro;case 35667:case 35671:return ao;case 35668:case 35672:return oo;case 35669:case 35673:return so;case 5125:return lo;case 36294:return co;case 36295:return fo;case 36296:return uo;case 35678:case 36198:case 36298:case 36306:case 35682:return po;case 35679:case 36299:case 36307:return ho;case 35680:case 36300:case 36308:case 36293:return mo;case 36289:case 36303:case 36311:case 36292:return _o}}function vo(e,n){e.uniform1fv(this.addr,n)}function So(e,n){const t=xt(n,this.size,2);e.uniform2fv(this.addr,t)}function Eo(e,n){const t=xt(n,this.size,3);e.uniform3fv(this.addr,t)}function Mo(e,n){const t=xt(n,this.size,4);e.uniform4fv(this.addr,t)}function xo(e,n){const t=xt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function To(e,n){const t=xt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Ao(e,n){const t=xt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Ro(e,n){e.uniform1iv(this.addr,n)}function Co(e,n){e.uniform2iv(this.addr,n)}function bo(e,n){e.uniform3iv(this.addr,n)}function Po(e,n){e.uniform4iv(this.addr,n)}function Lo(e,n){e.uniform1uiv(this.addr,n)}function Do(e,n){e.uniform2uiv(this.addr,n)}function wo(e,n){e.uniform3uiv(this.addr,n)}function Uo(e,n){e.uniform4uiv(this.addr,n)}function No(e,n,t){const i=this.cache,d=n.length,l=wt(t,d);if(!$e(i,l)){e.uniform1iv(this.addr,l);Qe(i,l)}let u;if(this.type===e.SAMPLER_2D_SHADOW)u=Ut(ln);else u=sn;for(let m=0;m!==d;++m)t.setTexture2D(n[m]||u,l[m])}function Io(e,n,t){const i=this.cache,d=n.length,l=wt(t,d);if(!$e(i,l)){e.uniform1iv(this.addr,l);Qe(i,l)}for(let u=0;u!==d;++u)t.setTexture3D(n[u]||dn,l[u])}function yo(e,n,t){const i=this.cache,d=n.length,l=wt(t,d);if(!$e(i,l)){e.uniform1iv(this.addr,l);Qe(i,l)}let u;if(this.type===e.SAMPLER_CUBE_SHADOW)u=Ut(cn);else u=un;for(let m=0;m!==d;++m)t.setTextureCube(n[m]||u,l[m])}function Fo(e,n,t){const i=this.cache,d=n.length,l=wt(t,d);if(!$e(i,l)){e.uniform1iv(this.addr,l);Qe(i,l)}for(let u=0;u!==d;++u)t.setTexture2DArray(n[u]||fn,l[u])}function Oo(e){switch(e){case 5126:return vo;case 35664:return So;case 35665:return Eo;case 35666:return Mo;case 35674:return xo;case 35675:return To;case 35676:return Ao;case 5124:case 35670:return Ro;case 35667:case 35671:return Co;case 35668:case 35672:return bo;case 35669:case 35673:return Po;case 5125:return Lo;case 36294:return Do;case 36295:return wo;case 36296:return Uo;case 35678:case 36198:case 36298:case 36306:case 35682:return No;case 35679:case 36299:case 36307:return Io;case 35680:case 36300:case 36308:case 36293:return yo;case 36289:case 36303:case 36311:case 36292:return Fo}}class wn{constructor(e,n,t){this.id=e;this.addr=t;this.cache=[];this.type=n.type;this.setValue=go(n.type)}}class Un{constructor(e,n,t){this.id=e;this.addr=t;this.cache=[];this.type=n.type;this.size=n.size;this.setValue=Oo(n.type)}}class Nn{constructor(e){this.id=e;this.seq=[];this.map={}}setValue(e,n,t){const i=this.seq;for(let d=0,l=i.length;d!==l;++d){const u=i[d];u.setValue(e,n[u.id],t)}}}const Ot=/(\w+)(\])?(\[|\.)?/g;function vn(e,n){e.seq.push(n);e.map[n.id]=n}function Bo(e,n,t){const i=e.name,d=i.length;Ot.lastIndex=0;while(!0){const l=Ot.exec(i),u=Ot.lastIndex;let m=l[1];const G=l[2]==="]",b=l[3];if(G)m=m|0;if(b===void 0||b==="["&&u+2===d){vn(t,b===void 0?new wn(m,e,n):new Un(m,e,n));break}else{let I=t.map[m];if(I===void 0){I=new Nn(m);vn(t,I)}t=I}}}class bt{constructor(e,n){this.seq=[];this.map={};const t=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let l=0;l<t;++l){const u=e.getActiveUniform(n,l),m=e.getUniformLocation(n,u.name);Bo(u,m,this)}const i=[],d=[];for(const l of this.seq)if(l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW)i.push(l);else d.push(l);if(i.length>0)this.seq=i.concat(d)}setValue(e,n,t,i){const d=this.map[n];if(d!==void 0)d.setValue(e,t,i)}setOptional(e,n,t){const i=n[t];if(i!==void 0)this.setValue(e,t,i)}static upload(e,n,t,i){for(let d=0,l=n.length;d!==l;++d){const u=n[d],m=t[u.id];if(m.needsUpdate!==!1)u.setValue(e,m.value,i)}}static seqWithValue(e,n){const t=[];for(let i=0,d=e.length;i!==d;++i){const l=e[i];if(l.id in n)t.push(l)}return t}}function Sn(e,n,t){const i=e.createShader(n);e.shaderSource(i,t);e.compileShader(i);return i}const Go=37297;let Ho=0;function Vo(e,n){const t=e.split(`
`),i=[],d=Math.max(n-6,0),l=Math.min(n+6,t.length);for(let u=d;u<l;u++){const m=u+1;i.push(`${m===n?">":" "} ${m}: ${t[u]}`)}return i.join(`
`)}const En=new Matrix3;function Wo(e){ColorManagement._getMatrix(En,ColorManagement.workingColorSpace,e);const n=`mat3( ${En.elements.map((t)=>t.toFixed(4))} )`;switch(ColorManagement.getTransfer(e)){case LinearTransfer:return[n,"LinearTransferOETF"];case SRGBTransfer:return[n,"sRGBTransferOETF"];default:warn("WebGLProgram: Unsupported color space: ",e);return[n,"LinearTransferOETF"]}}function Mn(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),l=(e.getShaderInfoLog(n)||"").trim();if(i&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const m=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Vo(e.getShaderSource(n),m)}else return l}function ko(e,n){const t=Wo(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const zo={[LinearToneMapping]:"Linear",[ReinhardToneMapping]:"Reinhard",[CineonToneMapping]:"Cineon",[ACESFilmicToneMapping]:"ACESFilmic",[AgXToneMapping]:"AgX",[NeutralToneMapping]:"Neutral",[CustomToneMapping]:"Custom"};function Xo(e,n){const t=zo[n];if(t===void 0){warn("WebGLProgram: Unsupported toneMapping:",n);return"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nt=new Vector3;function Ko(){ColorManagement.getLuminanceCoefficients(Nt);const e=Nt.x.toFixed(4),n=Nt.y.toFixed(4),t=Nt.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function qo(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rt).join(`
`)}function Yo(e){const n=[];for(const t in e){const i=e[t];if(i===!1)continue;n.push("#define "+t+" "+i)}return n.join(`
`)}function Zo(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let d=0;d<i;d++){const l=e.getActiveAttrib(n,d),u=l.name;let m=1;if(l.type===e.FLOAT_MAT2)m=2;if(l.type===e.FLOAT_MAT3)m=3;if(l.type===e.FLOAT_MAT4)m=4;t[u]={type:l.type,location:e.getAttribLocation(n,u),locationSize:m}}return t}function Rt(e){return e!==""}function xn(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,n.numLightProbeGrids)}function Tn(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const $o=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bt(e){return e.replace($o,Qo)}function Qo(e,n){const t=ShaderChunk[n];if(t===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+n+">");return Bt(t)}const Jo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function An(e){return e.replace(Jo,jo)}function jo(e,n,t,i){let d="";for(let l=parseInt(n);l<parseInt(t);l++)d+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return d}function Rn(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")n+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")n+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")n+=`
#define LOW_PRECISION`;return n}const es={[PCFShadowMap]:"SHADOWMAP_TYPE_PCF",[VSMShadowMap]:"SHADOWMAP_TYPE_VSM"};function ts(e){return es[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ns={[CubeRefractionMapping]:"ENVMAP_MODE_REFRACTION"};function is(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return ns[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rs={[MultiplyOperation]:"ENVMAP_BLENDING_MULTIPLY",[MixOperation]:"ENVMAP_BLENDING_MIX",[AddOperation]:"ENVMAP_BLENDING_ADD"};function as(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return rs[e.combine]||"ENVMAP_BLENDING_NONE"}function os(e,n,t,i){const d=e.getContext(),l=t.defines;let{vertexShader:u,fragmentShader:m}=t;const G=ts(t),b=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",W=is(t),I=as(t),S=qo(t),T=Yo(l),P=d.createProgram();let O,c,s=t.glslVersion?"#version "+t.glslVersion+`
`:"";if(t.isRawShaderMaterial){O=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Rt).join(`
`);if(O.length>0)O+=`
`;c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Rt).join(`
`);if(c.length>0)c+=`
`}else{O=[Rn(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+W:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+G:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Rt).join(`
`);c=[Rn(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.envMap?"#define "+W:"",t.envMap?"#define "+I:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+G:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?Xo("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,ko("linearToOutputTexel",t.outputColorSpace),Ko(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rt).join(`
`)}u=Bt(u);u=xn(u,t);u=Tn(u,t);m=Bt(m);m=xn(m,t);m=Tn(m,t);u=An(u);m=An(m);if(t.isRawShaderMaterial!==!0){s=`#version 300 es
`;O=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O;c=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c}const v=s+O+u,D=s+c+m,_=Sn(d,d.VERTEX_SHADER,v),M=Sn(d,d.FRAGMENT_SHADER,D);d.attachShader(P,_);d.attachShader(P,M);if(t.index0AttributeName!==void 0)d.bindAttribLocation(P,0,t.index0AttributeName);else if(t.hasPositionAttribute===!0)d.bindAttribLocation(P,0,"position");d.linkProgram(P);function w(q){if(e.debug.checkShaderErrors){const L=d.getProgramInfoLog(P)||"",k=d.getShaderInfoLog(_)||"",le=d.getShaderInfoLog(M)||"",x=L.trim(),Y=k.trim(),Q=le.trim();let y=!0,ge=!0;if(d.getProgramParameter(P,d.LINK_STATUS)===!1){y=!1;if(typeof e.debug.onShaderError==="function")e.debug.onShaderError(d,P,_,M);else{const K=Mn(d,_,"vertex"),J=Mn(d,M,"fragment");error("WebGLProgram: Shader Error "+d.getError()+" - VALIDATE_STATUS "+d.getProgramParameter(P,d.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+x+`
`+K+`
`+J)}}else if(x!=="")warn("WebGLProgram: Program Info Log:",x);else if(Y===""||Q==="")ge=!1;if(ge)q.diagnostics={runnable:y,programLog:x,vertexShader:{log:Y,prefix:O},fragmentShader:{log:Q,prefix:c}}}d.deleteShader(_);d.deleteShader(M);o=new bt(d,P);p=Zo(d,P)}let o;this.getUniforms=function(){if(o===void 0)w(this);return o};let p;this.getAttributes=function(){if(p===void 0)w(this);return p};let U=t.rendererExtensionParallelShaderCompile===!1;this.isReady=function(){if(U===!1)U=d.getProgramParameter(P,Go);return U};this.destroy=function(){i.releaseStatesOfProgram(this);d.deleteProgram(P);this.program=void 0};this.type=t.shaderType;this.name=t.shaderName;this.id=Ho++;this.cacheKey=n;this.usedTimes=1;this.program=P;this.vertexShader=_;this.fragmentShader=M;return this}let ss=0;class In{constructor(){this.shaderCache=new Map;this.materialCache=new Map}update(e,n,t){const i=this._getShaderCacheForMaterial(e);if(i.has(n)===!1){i.add(n);n.usedTimes++}if(i.has(t)===!1){i.add(t);t.usedTimes++}return this}remove(e){const n=this.materialCache.get(e);for(const t of n){t.usedTimes--;if(t.usedTimes===0)this.shaderCache.delete(t.code)}this.materialCache.delete(e);return this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear();this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let t=n.get(e);if(t===void 0){t=new Set;n.set(e,t)}return t}_getShaderStage(e){const n=this.shaderCache;let t=n.get(e);if(t===void 0){t=new yn(e);n.set(e,t)}return t}}class yn{constructor(e){this.id=ss++;this.code=e;this.usedTimes=0}}function ls(e){return e===RGFormat||e===RG11_EAC_Format||e===RED_GREEN_RGTC2_Format}function cs(e,n,t,i,d,l){const u=new Layers,m=new In,G=new Set,b=[],W=new Map,I=i.logarithmicDepthBuffer,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(o){G.add(o);if(o===0)return"uv";return`uv${o}`}function P(o,p,U,q,L,k){const le=q.fog,x=L.geometry,Y=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?q.environment:null,Q=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,y=n.get(o.envMap||Y,Q),ge=S[o.type];let K=i.precision;if(o.precision!==null){K=i.getMaxPrecision(o.precision);if(K!==o.precision)warn("WebGLProgram.getParameters:",o.precision,"not supported, using",K,"instead.")}const J=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,ce=J!==void 0?J.length:0;let Ae=0;if(x.morphAttributes.position!==void 0)Ae=1;if(x.morphAttributes.normal!==void 0)Ae=2;if(x.morphAttributes.color!==void 0)Ae=3;let X,ne,Se,Ce;if(ge){const ue=ShaderLib[ge];X=ue.vertexShader;ne=ue.fragmentShader}else{X=o.vertexShader;ne=o.fragmentShader;const ue=m.getVertexShaderStage(o),Ge=m.getFragmentShaderStage(o);m.update(o,ue,Ge);Se=ue.id;Ce=Ge.id}const be=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,Ie=L.isBatchedMesh===!0,we=!!o.map,ke=!!o.matcap,ye=!!y,Ke=ye&&y.isPMREMTexture===!0,qe=!!o.aoMap,st=!!o.lightMap,dt=!!o.bumpMap&&o.wireframe===!1,Ye=!!o.normalMap,nt=!!o.displacementMap,lt=!!o.emissiveMap,ct=!!o.metalnessMap,ut=!!o.roughnessMap,E=o.anisotropy>0,pt=o.clearcoat>0,Be=o.diffuseRoughness>0,Je=o.dispersion>0,fe=o.retroreflectivity>0,Ve=o.iridescence>0,Re=o.sheen>0,Pe=o.transmission>0,it=E&&!!o.anisotropyMap,f=pt&&!!o.clearcoatMap,r=pt&&!!o.clearcoatNormalMap,A=pt&&!!o.clearcoatRoughnessMap,Z=Be&&!!o.diffuseRoughnessMap,z=Ve&&!!o.iridescenceMap,te=Ve&&!!o.iridescenceThicknessMap,ae=Re&&!!o.sheenColorMap,F=Re&&!!o.sheenRoughnessMap,V=!!o.specularMap,ie=!!o.specularColorMap,h=!!o.specularIntensityMap,H=Pe&&!!o.transmissionMap,B=Pe&&!!o.thicknessMap,j=!!o.gradientMap,ee=!!o.alphaMap,se=o.alphaTest>0,xe=!!o.alphaHash,Ee=!!o.extensions;let de=NoToneMapping;if(o.toneMapped){if(be===null||be.isXRRenderTarget===!0)de=e.toneMapping}const Te=Ke?y.isCompressedCubeTexture?y.image[0].mipmaps:y.mipmaps:null,De={shaderID:ge,shaderType:o.type,shaderName:o.name,vertexShader:X,fragmentShader:ne,defines:o.defines,customVertexShaderID:Se,customFragmentShaderID:Ce,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:K,batching:Ie,batchingColor:Ie&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,outputColorSpace:be===null?e.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:ColorManagement.workingColorSpace,alphaToCoverage:!!o.alphaToCoverage,map:we,matcap:ke,envMap:ye,envMapMode:ye&&y.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?Te.length-1:null,envMapSize:Ke?Te[0].width:null,aoMap:qe,lightMap:st,bumpMap:dt,normalMap:Ye,displacementMap:nt,emissiveMap:lt,normalMapObjectSpace:Ye&&o.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:Ye&&o.normalMapType===TangentSpaceNormalMap,packedNormalMap:Ye&&o.normalMapType===TangentSpaceNormalMap&&ls(o.normalMap.format),metalnessMap:ct,roughnessMap:ut,anisotropy:E,anisotropyMap:it,clearcoat:pt,clearcoatMap:f,clearcoatNormalMap:r,clearcoatRoughnessMap:A,diffuseRoughness:Be,diffuseRoughnessMap:Z,dispersion:Je,retroreflection:fe,iridescence:Ve,iridescenceMap:z,iridescenceThicknessMap:te,sheen:Re,sheenColorMap:ae,sheenRoughnessMap:F,specularMap:V,specularColorMap:ie,specularIntensityMap:h,transmission:Pe,transmissionMap:H,thicknessMap:B,gradientMap:j,opaque:o.transparent===!1&&o.blending===NormalBlending&&o.alphaToCoverage===!1,alphaMap:ee,alphaTest:se,alphaHash:xe,combine:o.combine,mapUv:we&&T(o.map.channel),aoMapUv:qe&&T(o.aoMap.channel),lightMapUv:st&&T(o.lightMap.channel),bumpMapUv:dt&&T(o.bumpMap.channel),normalMapUv:Ye&&T(o.normalMap.channel),displacementMapUv:nt&&T(o.displacementMap.channel),emissiveMapUv:lt&&T(o.emissiveMap.channel),metalnessMapUv:ct&&T(o.metalnessMap.channel),roughnessMapUv:ut&&T(o.roughnessMap.channel),anisotropyMapUv:it&&T(o.anisotropyMap.channel),clearcoatMapUv:f&&T(o.clearcoatMap.channel),clearcoatNormalMapUv:r&&T(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A&&T(o.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Z&&T(o.diffuseRoughnessMap.channel),iridescenceMapUv:z&&T(o.iridescenceMap.channel),iridescenceThicknessMapUv:te&&T(o.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&T(o.sheenColorMap.channel),sheenRoughnessMapUv:F&&T(o.sheenRoughnessMap.channel),specularMapUv:V&&T(o.specularMap.channel),specularColorMapUv:ie&&T(o.specularColorMap.channel),specularIntensityMapUv:h&&T(o.specularIntensityMap.channel),transmissionMapUv:H&&T(o.transmissionMap.channel),thicknessMapUv:B&&T(o.thicknessMap.channel),alphaMapUv:ee&&T(o.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(Ye||E),vertexNormals:!!x.attributes.normal,vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!x.attributes.uv&&(we||ee),fog:!!le,useFog:o.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:o.wireframe===!1&&(o.flatShading===!0||x.attributes.normal===void 0&&Ye===!1&&(o.isMeshLambertMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isMeshPhysicalMaterial)),sizeAttenuation:o.sizeAttenuation===!0,logarithmicDepthBuffer:I,reversedDepthBuffer:Me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:x.attributes.position!==void 0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ae,numSunLights:p.sun.length,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numSpotLightMaps:p.spotLightMap.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numSunLightShadows:p.sunShadowMap.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numSpotLightShadowsWithMaps:p.numSpotLightShadowsWithMaps,numLightProbes:p.numLightProbes,numLightProbeGrids:k.filter((ue)=>ue.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:de,decodeVideoTexture:we&&o.map.isVideoTexture===!0&&ColorManagement.getTransfer(o.map.colorSpace)===SRGBTransfer,decodeVideoTextureEmissive:lt&&o.emissiveMap.isVideoTexture===!0&&ColorManagement.getTransfer(o.emissiveMap.colorSpace)===SRGBTransfer,premultipliedAlpha:o.premultipliedAlpha,doubleSided:o.side===DoubleSide,flipSided:o.side===BackSide,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionClipCullDistance:Ee&&o.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&o.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:o.customProgramCacheKey()};De.vertexUv1s=G.has(1);De.vertexUv2s=G.has(2);De.vertexUv3s=G.has(3);G.clear();return De}function O(o){const p=[];if(o.shaderID)p.push(o.shaderID);else{p.push(o.customVertexShaderID);p.push(o.customFragmentShaderID)}if(o.defines!==void 0)for(const U in o.defines){p.push(U);p.push(o.defines[U])}if(o.isRawShaderMaterial===!1){c(p,o);s(p,o);p.push(e.outputColorSpace)}p.push(o.customProgramCacheKey);return p.join()}function c(o,p){o.push(p.precision);o.push(p.outputColorSpace);o.push(p.envMapMode);o.push(p.envMapPMREM);o.push(p.envMapMaxLod);o.push(p.envMapSize);o.push(p.mapUv);o.push(p.alphaMapUv);o.push(p.lightMapUv);o.push(p.aoMapUv);o.push(p.bumpMapUv);o.push(p.normalMapUv);o.push(p.displacementMapUv);o.push(p.emissiveMapUv);o.push(p.metalnessMapUv);o.push(p.roughnessMapUv);o.push(p.anisotropyMapUv);o.push(p.clearcoatMapUv);o.push(p.clearcoatNormalMapUv);o.push(p.clearcoatRoughnessMapUv);o.push(p.diffuseRoughnessMapUv);o.push(p.iridescenceMapUv);o.push(p.iridescenceThicknessMapUv);o.push(p.sheenColorMapUv);o.push(p.sheenRoughnessMapUv);o.push(p.specularMapUv);o.push(p.specularColorMapUv);o.push(p.specularIntensityMapUv);o.push(p.transmissionMapUv);o.push(p.thicknessMapUv);o.push(p.combine);o.push(p.fogExp2);o.push(p.sizeAttenuation);o.push(p.morphTargetsCount);o.push(p.numSunLights);o.push(p.numDirLights);o.push(p.numPointLights);o.push(p.numSpotLights);o.push(p.numSpotLightMaps);o.push(p.numHemiLights);o.push(p.numRectAreaLights);o.push(p.numSunLightShadows);o.push(p.numDirLightShadows);o.push(p.numPointLightShadows);o.push(p.numSpotLightShadows);o.push(p.numSpotLightShadowsWithMaps);o.push(p.numLightProbes);o.push(p.numLightProbeGrids);o.push(p.shadowMapType);o.push(p.toneMapping);o.push(p.numClippingPlanes);o.push(p.numClipIntersection);o.push(p.depthPacking)}function s(o,p){u.disableAll();if(p.instancing)u.enable(0);if(p.instancingColor)u.enable(1);if(p.instancingMorph)u.enable(2);if(p.matcap)u.enable(3);if(p.envMap)u.enable(4);if(p.normalMapObjectSpace)u.enable(5);if(p.normalMapTangentSpace)u.enable(6);if(p.clearcoat)u.enable(7);if(p.iridescence)u.enable(8);if(p.alphaTest)u.enable(9);if(p.vertexColors)u.enable(10);if(p.vertexAlphas)u.enable(11);if(p.vertexUv1s)u.enable(12);if(p.vertexUv2s)u.enable(13);if(p.vertexUv3s)u.enable(14);if(p.vertexTangents)u.enable(15);if(p.anisotropy)u.enable(16);if(p.alphaHash)u.enable(17);if(p.batching)u.enable(18);if(p.dispersion)u.enable(19);if(p.retroreflection)u.enable(24);if(p.diffuseRoughness)u.enable(25);if(p.batchingColor)u.enable(20);if(p.gradientMap)u.enable(21);if(p.packedNormalMap)u.enable(22);if(p.vertexNormals)u.enable(23);o.push(u.mask);u.disableAll();if(p.fog)u.enable(0);if(p.useFog)u.enable(1);if(p.flatShading)u.enable(2);if(p.logarithmicDepthBuffer)u.enable(3);if(p.reversedDepthBuffer)u.enable(4);if(p.skinning)u.enable(5);if(p.morphTargets)u.enable(6);if(p.morphNormals)u.enable(7);if(p.morphColors)u.enable(8);if(p.premultipliedAlpha)u.enable(9);if(p.shadowMapEnabled)u.enable(10);if(p.doubleSided)u.enable(11);if(p.flipSided)u.enable(12);if(p.useDepthPacking)u.enable(13);if(p.dithering)u.enable(14);if(p.transmission)u.enable(15);if(p.sheen)u.enable(16);if(p.opaque)u.enable(17);if(p.pointsUvs)u.enable(18);if(p.decodeVideoTexture)u.enable(19);if(p.decodeVideoTextureEmissive)u.enable(20);if(p.alphaToCoverage)u.enable(21);if(p.numLightProbeGrids>0)u.enable(22);if(p.hasPositionAttribute)u.enable(23);o.push(u.mask)}function v(o){const p=S[o.type];let U;if(p){const q=ShaderLib[p];U=UniformsUtils.clone(q.uniforms)}else U=o.uniforms;return U}function D(o,p){let U=W.get(p);if(U!==void 0)++U.usedTimes;else{U=new os(e,p,o,d);b.push(U);W.set(p,U)}return U}function _(o){if(--o.usedTimes===0){const p=b.indexOf(o);b[p]=b[b.length-1];b.pop();W.delete(o.cacheKey);o.destroy()}}function M(o){m.remove(o)}function w(){m.dispose()}return{getParameters:P,getProgramCacheKey:O,getUniforms:v,acquireProgram:D,releaseProgram:_,releaseShaderCache:M,programs:b,dispose:w}}function fs(){let e=new WeakMap;function n(u){return e.has(u)}function t(u){let m=e.get(u);if(m===void 0){m={};e.set(u,m)}return m}function i(u){e.delete(u)}function d(u,m,G){e.get(u)[m]=G}function l(){e=new WeakMap}return{has:n,get:t,remove:i,update:d,dispose:l}}function ds(e,n){if(e.groupOrder!==n.groupOrder)return e.groupOrder-n.groupOrder;else if(e.renderOrder!==n.renderOrder)return e.renderOrder-n.renderOrder;else if(e.material.id!==n.material.id)return e.material.id-n.material.id;else if(e.materialVariant!==n.materialVariant)return e.materialVariant-n.materialVariant;else if(e.z!==n.z)return e.z-n.z;else return e.id-n.id}function Cn(e,n){if(e.groupOrder!==n.groupOrder)return e.groupOrder-n.groupOrder;else if(e.renderOrder!==n.renderOrder)return e.renderOrder-n.renderOrder;else if(e.z!==n.z)return n.z-e.z;else return e.id-n.id}function bn(){const e=[];let n=0;const t=[],i=[],d=[];function l(){n=0;t.length=0;i.length=0;d.length=0}function u(S){let T=0;if(S.isInstancedMesh)T+=2;if(S.isSkinnedMesh)T+=1;return T}function m(S,T,P,O,c,s){let v=e[n];if(v===void 0){v={id:S.id,object:S,geometry:T,material:P,materialVariant:u(S),groupOrder:O,renderOrder:S.renderOrder,z:c,group:s};e[n]=v}else{v.id=S.id;v.object=S;v.geometry=T;v.material=P;v.materialVariant=u(S);v.groupOrder=O;v.renderOrder=S.renderOrder;v.z=c;v.group=s}n++;return v}function G(S,T,P,O,c,s,v){if(v.reversedDepth===!0)c=-c;const D=m(S,T,P,O,c,s);if(P.transmission>0)i.push(D);else if(P.transparent===!0)d.push(D);else t.push(D)}function b(S,T,P,O,c,s){const v=m(S,T,P,O,c,s);if(P.transmission>0)i.unshift(v);else if(P.transparent===!0)d.unshift(v);else t.unshift(v)}function W(S,T){if(t.length>1)t.sort(S||ds);if(i.length>1)i.sort(T||Cn);if(d.length>1)d.sort(T||Cn)}function I(){for(let S=n,T=e.length;S<T;S++){const P=e[S];if(P.id===null)break;P.id=null;P.object=null;P.geometry=null;P.material=null;P.group=null}}return{opaque:t,transmissive:i,transparent:d,init:l,push:G,unshift:b,finish:I,sort:W}}function us(){let e=new WeakMap;function n(i,d){const l=e.get(i);let u;if(l===void 0){u=new bn;e.set(i,[u])}else if(d>=l.length){u=new bn;l.push(u)}else u=l[d];return u}function t(){e=new WeakMap}return{get:n,dispose:t}}function ps(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}e[n.id]=t;return t}}}function hs(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1000};break}e[n.id]=t;return t}}}let ms=0;function _s(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function gs(e){const n=new ps,t=hs(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let b=0;b<9;b++)i.probe.push(new Vector3);const d=new Vector3,l=new Matrix4,u=new Matrix4;function m(b){let W=0,I=0,S=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let T=0,P=0,O=0,c=0,s=0,v=0,D=0,_=0,M=0,w=0,o=0,p=0,U=0,q=0;b.sort(_s);for(let k=0,le=b.length;k<le;k++){const x=b[k],{color:Y,intensity:Q,distance:y}=x;let ge=null;if(x.shadow&&x.shadow.map)if(x.shadow.map.texture.format===RGFormat)ge=x.shadow.map.texture;else ge=x.shadow.map.depthTexture||x.shadow.map.texture;if(x.isAmbientLight){W+=Y.r*Q;I+=Y.g*Q;S+=Y.b*Q}else if(x.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(x.sh.coefficients[K],Q);q++}else if(x.isSunLight){const K=n.get(x);K.color.copy(x.color).multiplyScalar(x.intensity);if(x.castShadow){const J=x.shadow,ce=t.get(x);ce.shadowIntensity=J.intensity;ce.shadowBias=J.bias;ce.shadowNormalBias=J.normalBias;ce.shadowRadius=J.radius;ce.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents());i.sunShadow[P]=ce;i.sunShadowMap[P]=ge;const Ae=J.getViewportCount();for(let X=0;X<Ae;X++){i.sunShadowMatrix[O+X]=J.getMatrix(X);i.sunShadowCascade[O+X]=J._cascadeData[X]}O+=Ae;P++}i.sun[T]=K;T++}else if(x.isDirectionalLight){const K=n.get(x);K.color.copy(x.color).multiplyScalar(x.intensity);if(x.castShadow){const J=x.shadow,ce=t.get(x);ce.shadowIntensity=J.intensity;ce.shadowBias=J.bias;ce.shadowNormalBias=J.normalBias;ce.shadowRadius=J.radius;ce.shadowMapSize=J.mapSize;i.directionalShadow[c]=ce;i.directionalShadowMap[c]=ge;i.directionalShadowMatrix[c]=x.shadow.matrix;M++}i.directional[c]=K;c++}else if(x.isSpotLight){const K=n.get(x);K.position.setFromMatrixPosition(x.matrixWorld);K.color.copy(Y).multiplyScalar(Q);K.distance=y;K.coneCos=Math.cos(x.angle);K.penumbraCos=Math.cos(x.angle*(1-x.penumbra));K.decay=x.decay;i.spot[v]=K;const J=x.shadow;if(x.map){i.spotLightMap[p]=x.map;p++;J.updateMatrices(x);if(x.castShadow)U++}i.spotLightMatrix[v]=J.matrix;if(x.castShadow){const ce=t.get(x);ce.shadowIntensity=J.intensity;ce.shadowBias=J.bias;ce.shadowNormalBias=J.normalBias;ce.shadowRadius=J.radius;ce.shadowMapSize=J.mapSize;i.spotShadow[v]=ce;i.spotShadowMap[v]=ge;o++}v++}else if(x.isRectAreaLight){const K=n.get(x);K.color.copy(Y).multiplyScalar(Q);K.halfWidth.set(x.width*0.5,0,0);K.halfHeight.set(0,x.height*0.5,0);i.rectArea[D]=K;D++}else if(x.isPointLight){const K=n.get(x);K.color.copy(x.color).multiplyScalar(x.intensity);K.distance=x.distance;K.decay=x.decay;if(x.castShadow){const J=x.shadow,ce=t.get(x);ce.shadowIntensity=J.intensity;ce.shadowBias=J.bias;ce.shadowNormalBias=J.normalBias;ce.shadowRadius=J.radius;ce.shadowMapSize=J.mapSize;ce.shadowCameraNear=J.camera.near;ce.shadowCameraFar=J.camera.far;i.pointShadow[s]=ce;i.pointShadowMap[s]=ge;i.pointShadowMatrix[s]=x.shadow.matrix;w++}i.point[s]=K;s++}else if(x.isHemisphereLight){const K=n.get(x);K.skyColor.copy(x.color).multiplyScalar(Q);K.groundColor.copy(x.groundColor).multiplyScalar(Q);i.hemi[_]=K;_++}}if(D>0)if(e.has("OES_texture_float_linear")===!0){i.rectAreaLTC1=UniformsLib.LTC_FLOAT_1;i.rectAreaLTC2=UniformsLib.LTC_FLOAT_2}else{i.rectAreaLTC1=UniformsLib.LTC_HALF_1;i.rectAreaLTC2=UniformsLib.LTC_HALF_2}i.ambient[0]=W;i.ambient[1]=I;i.ambient[2]=S;const L=i.hash;if(L.sunLength!==T||L.directionalLength!==c||L.pointLength!==s||L.spotLength!==v||L.rectAreaLength!==D||L.hemiLength!==_||L.numSunShadows!==P||L.numDirectionalShadows!==M||L.numPointShadows!==w||L.numSpotShadows!==o||L.numSpotMaps!==p||L.numLightProbes!==q){i.sun.length=T;i.directional.length=c;i.spot.length=v;i.rectArea.length=D;i.point.length=s;i.hemi.length=_;i.sunShadow.length=P;i.sunShadowMap.length=P;i.sunShadowMatrix.length=O;i.sunShadowCascade.length=O;i.directionalShadow.length=M;i.directionalShadowMap.length=M;i.directionalShadowMatrix.length=M;i.pointShadow.length=w;i.pointShadowMap.length=w;i.pointShadowMatrix.length=w;i.spotShadow.length=o;i.spotShadowMap.length=o;i.spotLightMatrix.length=o+p-U;i.spotLightMap.length=p;i.numSpotLightShadowsWithMaps=U;i.numLightProbes=q;L.sunLength=T;L.directionalLength=c;L.pointLength=s;L.spotLength=v;L.rectAreaLength=D;L.hemiLength=_;L.numSunShadows=P;L.numDirectionalShadows=M;L.numPointShadows=w;L.numSpotShadows=o;L.numSpotMaps=p;L.numLightProbes=q;i.version=ms++}}function G(b,W){let I=0,S=0,T=0,P=0,O=0,c=0;const s=W.matrixWorldInverse;for(let v=0,D=b.length;v<D;v++){const _=b[v];if(_.isSunLight){const M=i.sun[I];M.direction.setFromMatrixPosition(_.matrixWorld);M.direction.transformDirection(s);I++}else if(_.isDirectionalLight){const M=i.directional[S];M.direction.setFromMatrixPosition(_.matrixWorld);d.setFromMatrixPosition(_.target.matrixWorld);M.direction.sub(d);M.direction.transformDirection(s);S++}else if(_.isSpotLight){const M=i.spot[P];M.position.setFromMatrixPosition(_.matrixWorld);M.position.applyMatrix4(s);M.direction.setFromMatrixPosition(_.matrixWorld);d.setFromMatrixPosition(_.target.matrixWorld);M.direction.sub(d);M.direction.transformDirection(s);P++}else if(_.isRectAreaLight){const M=i.rectArea[O];M.position.setFromMatrixPosition(_.matrixWorld);M.position.applyMatrix4(s);u.identity();l.copy(_.matrixWorld);l.premultiply(s);u.extractRotation(l);M.halfWidth.set(_.width*0.5,0,0);M.halfHeight.set(0,_.height*0.5,0);M.halfWidth.applyMatrix4(u);M.halfHeight.applyMatrix4(u);O++}else if(_.isPointLight){const M=i.point[T];M.position.setFromMatrixPosition(_.matrixWorld);M.position.applyMatrix4(s);T++}else if(_.isHemisphereLight){const M=i.hemi[c];M.direction.setFromMatrixPosition(_.matrixWorld);M.direction.transformDirection(s);c++}}}return{setup:m,setupView:G,state:i}}function Pn(e){const n=new gs(e),t=[],i=[],d=[];function l(I){W.camera=I;t.length=0;i.length=0;d.length=0}function u(I){if(I.isLightProbeGrid)d.push(I);else t.push(I)}function m(I){i.push(I)}function G(){n.setup(t);d.sort((I,S)=>I.priority-S.priority||I.id-S.id)}function b(I){n.setupView(t,I)}const W={lightsArray:t,shadowsArray:i,lightProbeGridArray:d,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:W,setupLights:G,setupLightsView:b,pushLight:u,pushShadow:m}}function vs(e){let n=new WeakMap;function t(d,l=0){const u=n.get(d);let m;if(u===void 0){m=new Pn(e);n.set(d,[m])}else if(l>=u.length){m=new Pn(e);u.push(m)}else m=u[l];return m}function i(){n=new WeakMap}return{get:t,dispose:i}}const Ss=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Es=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ms=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,-1)],xs=[new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,-1,0),new Vector3(0,-1,0)],Ln=new Matrix4,Ct=new Vector3,Gt=new Vector3;function Ts(e,n,t){let i=new Frustum;const d=new Vector2,l=new Vector2,u=new Vector4,m=new MeshDepthMaterial,G=new MeshDistanceMaterial,b={},W=t.maxTextureSize,I={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},S=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:Ss,fragmentShader:Es}),T=S.clone();T.defines.HORIZONTAL_PASS=1;const P=new BufferGeometry;P.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));const O=new Mesh(P,S),c=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=PCFShadowMap;let s=this.type;this.render=function(w,o,p){if(c.enabled===!1)return;if(c.autoUpdate===!1&&c.needsUpdate===!1)return;if(w.length===0)return;if(this.type===PCFSoftShadowMap){warn("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.");this.type=PCFShadowMap}const U=e.getRenderTarget(),q=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),k=e.state;k.setBlending(NoBlending);if(k.buffers.depth.getReversed()===!0)k.buffers.color.setClear(0,0,0,0);else k.buffers.color.setClear(1,1,1,1);k.buffers.depth.setTest(!0);k.setScissorTest(!1);const le=s!==this.type;if(le)o.traverse(function(x){if(x.material)if(Array.isArray(x.material))x.material.forEach((Y)=>Y.needsUpdate=!0);else x.material.needsUpdate=!0});for(let x=0,Y=w.length;x<Y;x++){const Q=w[x],y=Q.shadow;if(y===void 0){warn("WebGLShadowMap:",Q,"has no shadow.");continue}if(y.autoUpdate===!1&&y.needsUpdate===!1)continue;d.copy(y.mapSize);const ge=y.getFrameExtents();d.multiply(ge);l.copy(y.mapSize);if(d.x>W||d.y>W){if(d.x>W){l.x=Math.floor(W/ge.x);d.x=l.x*ge.x;y.mapSize.x=l.x}if(d.y>W){l.y=Math.floor(W/ge.y);d.y=l.y*ge.y;y.mapSize.y=l.y}}const K=e.state.buffers.depth.getReversed();y.camera._reversedDepth=K;if(y.map===null||le===!0){if(y.map!==null){if(y.map.depthTexture!==null){y.map.depthTexture.dispose();y.map.depthTexture=null}y.map.dispose()}if(this.type===VSMShadowMap){if(Q.isPointLight){warn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}y.map=new WebGLRenderTarget(d.x,d.y,{format:RGFormat,type:HalfFloatType,minFilter:LinearFilter,magFilter:LinearFilter,generateMipmaps:!1});y.map.texture.name=Q.name+".shadowMap";y.map.depthTexture=new DepthTexture(d.x,d.y,FloatType);y.map.depthTexture.name=Q.name+".shadowMapDepth";y.map.depthTexture.format=DepthFormat;y.map.depthTexture.compareFunction=null;y.map.depthTexture.minFilter=NearestFilter;y.map.depthTexture.magFilter=NearestFilter}else{if(Q.isPointLight){y.map=new WebGLCubeRenderTarget(d.x);y.map.depthTexture=new CubeDepthTexture(d.x,UnsignedIntType)}else{y.map=new WebGLRenderTarget(d.x,d.y);y.map.depthTexture=new DepthTexture(d.x,d.y,UnsignedIntType)}y.map.depthTexture.name=Q.name+".shadowMap";y.map.depthTexture.format=DepthFormat;if(this.type===PCFShadowMap){y.map.depthTexture.compareFunction=K?GreaterEqualCompare:LessEqualCompare;y.map.depthTexture.minFilter=LinearFilter;y.map.depthTexture.magFilter=LinearFilter}else{y.map.depthTexture.compareFunction=null;y.map.depthTexture.minFilter=NearestFilter;y.map.depthTexture.magFilter=NearestFilter}}y.camera.updateProjectionMatrix()}if(y.map.isWebGLCubeRenderTarget!==!0&&(y.map.width!==d.x||y.map.height!==d.y))y.map.setSize(d.x,d.y);const J=y.map.isWebGLCubeRenderTarget?6:y.getViewportCount();if(Q.isPointLight!==!0)y.updateMatrices(Q,p);const ce=(y.camera.layers.mask&4294967294)!==0?y.camera.layers:p.layers;for(let Ae=0;Ae<J;Ae++){const X=y.getCamera(Ae);if(Q.isPointLight){const{camera:ne,matrix:Se}=y,Ce=Q.distance||ne.far;if(Ce!==ne.far){ne.far=Ce;ne.updateProjectionMatrix()}Ct.setFromMatrixPosition(Q.matrixWorld);ne.position.copy(Ct);Gt.copy(ne.position);Gt.add(Ms[Ae]);ne.up.copy(xs[Ae]);ne.lookAt(Gt);ne.updateMatrixWorld();Se.makeTranslation(-Ct.x,-Ct.y,-Ct.z);Ln.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse);y._frustum.setFromProjectionMatrix(Ln,ne.coordinateSystem,ne.reversedDepth)}if(y.map.isWebGLCubeRenderTarget){e.setRenderTarget(y.map,Ae);e.clear()}else{if(Ae===0){e.setRenderTarget(y.map);e.clear()}const ne=y.getViewport(Ae);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w);k.viewport(u)}i=y.getFrustum(Ae);_(o,p,X,Q,ce,this.type)}if(y.isPointLightShadow!==!0&&this.type===VSMShadowMap)v(y,p);y.needsUpdate=!1}s=this.type;c.needsUpdate=!1;e.setRenderTarget(U,q,L)};function v(w,o){const p=n.update(O);if(S.defines.VSM_SAMPLES!==w.blurSamples){S.defines.VSM_SAMPLES=w.blurSamples;T.defines.VSM_SAMPLES=w.blurSamples;S.needsUpdate=!0;T.needsUpdate=!0}if(w.mapPass===null)w.mapPass=new WebGLRenderTarget(d.x,d.y,{format:RGFormat,type:HalfFloatType});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);S.uniforms.shadow_pass.value=w.map.depthTexture;S.uniforms.resolution.value.set(w.map.width,w.map.height);S.uniforms.radius.value=w.radius;e.setRenderTarget(w.mapPass);e.clear();e.renderBufferDirect(o,null,p,S,O,null);T.uniforms.shadow_pass.value=w.mapPass.texture;T.uniforms.resolution.value.set(w.map.width,w.map.height);T.uniforms.radius.value=w.radius;e.setRenderTarget(w.map);e.clear();e.renderBufferDirect(o,null,p,T,O,null)}function D(w,o,p,U){let q=null;const L=p.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)q=L;else{q=p.isPointLight===!0?G:m;if(e.localClippingEnabled&&o.clipShadows===!0&&Array.isArray(o.clippingPlanes)&&o.clippingPlanes.length!==0||o.displacementMap&&o.displacementScale!==0||o.alphaMap&&o.alphaTest>0||o.map&&o.alphaTest>0||o.alphaToCoverage===!0){const k=q.uuid,le=o.uuid;let x=b[k];if(x===void 0){x={};b[k]=x}let Y=x[le];if(Y===void 0){Y=q.clone();x[le]=Y;o.addEventListener("dispose",M)}q=Y}}q.visible=o.visible;q.wireframe=o.wireframe;if(U===VSMShadowMap)q.side=o.shadowSide!==null?o.shadowSide:o.side;else q.side=o.shadowSide!==null?o.shadowSide:I[o.side];q.alphaMap=o.alphaMap;q.alphaTest=o.alphaToCoverage===!0?0.5:o.alphaTest;q.map=o.map;q.clipShadows=o.clipShadows;q.clippingPlanes=o.clippingPlanes;q.clipIntersection=o.clipIntersection;q.displacementMap=o.displacementMap;q.displacementScale=o.displacementScale;q.displacementBias=o.displacementBias;q.wireframeLinewidth=o.wireframeLinewidth;q.linewidth=o.linewidth;if(p.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const k=e.properties.get(q);k.light=p}return q}function _(w,o,p,U,q,L){if(w.visible===!1)return;if(w.layers.test(q)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&L===VSMShadowMap)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,w.matrixWorld);const x=n.update(w),Y=w.material;if(Array.isArray(Y)){const Q=x.groups;for(let y=0,ge=Q.length;y<ge;y++){const K=Q[y],J=Y[K.materialIndex];if(J&&J.visible){const ce=D(w,J,U,L);w.onBeforeShadow(e,w,o,p,x,ce,K);e.renderBufferDirect(p,null,x,ce,w,K);w.onAfterShadow(e,w,o,p,x,ce,K)}}}else if(Y.visible){const Q=D(w,Y,U,L);w.onBeforeShadow(e,w,o,p,x,Q,null);e.renderBufferDirect(p,null,x,Q,w,null);w.onAfterShadow(e,w,o,p,x,Q,null)}}}const le=w.children;for(let x=0,Y=le.length;x<Y;x++)_(le[x],o,p,U,q,L)}function M(w){w.target.removeEventListener("dispose",M);for(const p in b){const U=b[p],q=w.target.uuid;if(q in U){U[q].dispose();delete U[q]}}}}function As(e,n){function t(){let h=!1;const H=new Vector4;let B=null;const j=new Vector4(0,0,0,0);return{setMask:function(ee){if(B!==ee&&!h){e.colorMask(ee,ee,ee,ee);B=ee}},setLocked:function(ee){h=ee},setClear:function(ee,se,xe,Ee,de){if(de===!0){ee*=Ee;se*=Ee;xe*=Ee}H.set(ee,se,xe,Ee);if(j.equals(H)===!1){e.clearColor(ee,se,xe,Ee);j.copy(H)}},reset:function(){h=!1;B=null;j.set(-1,0,0,0)}}}function i(){let h=!1,H=!1,B=null,j=null,ee=null;return{setReversed:function(se){if(H!==se){const xe=n.get("EXT_clip_control");if(se)xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT);else xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT);H=se;const Ee=ee;ee=null;this.setClear(Ee)}},getReversed:function(){return H},setTest:function(se){if(se)Me(e.DEPTH_TEST);else ze(e.DEPTH_TEST)},setMask:function(se){if(B!==se&&!h){e.depthMask(se);B=se}},setFunc:function(se){if(H)se=zn[se];if(j!==se){switch(se){case NeverDepth:e.depthFunc(e.NEVER);break;case AlwaysDepth:e.depthFunc(e.ALWAYS);break;case LessDepth:e.depthFunc(e.LESS);break;case LessEqualDepth:e.depthFunc(e.LEQUAL);break;case EqualDepth:e.depthFunc(e.EQUAL);break;case GreaterEqualDepth:e.depthFunc(e.GEQUAL);break;case GreaterDepth:e.depthFunc(e.GREATER);break;case NotEqualDepth:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}j=se}},setLocked:function(se){h=se},setClear:function(se){if(ee!==se){ee=se;if(H)se=1-se;e.clearDepth(se)}},reset:function(){h=!1;B=null;j=null;ee=null;H=!1}}}function d(){let h=!1,H=null,B=null,j=null,ee=null,se=null,xe=null,Ee=null,de=null;return{setTest:function(Te){if(!h)if(Te)Me(e.STENCIL_TEST);else ze(e.STENCIL_TEST)},setMask:function(Te){if(H!==Te&&!h){e.stencilMask(Te);H=Te}},setFunc:function(Te,De,ue){if(B!==Te||j!==De||ee!==ue){e.stencilFunc(Te,De,ue);B=Te;j=De;ee=ue}},setOp:function(Te,De,ue){if(se!==Te||xe!==De||Ee!==ue){e.stencilOp(Te,De,ue);se=Te;xe=De;Ee=ue}},setLocked:function(Te){h=Te},setClear:function(Te){if(de!==Te){e.clearStencil(Te);de=Te}},reset:function(){h=!1;H=null;B=null;j=null;ee=null;se=null;xe=null;Ee=null;de=null}}}const l=new t,u=new i,m=new d;let G={};const b=new WeakMap;let W={},I={},S={},T=new WeakMap,P=[],O=null,c=!1,s=null,v=null,D=null,_=null,M=null,w=null,o=null,p=new Color(0,0,0),U=0,q=!1,L=null,k=null,le=null,x=null,Y=null;const Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let y=!1,ge=0;const K=e.getParameter(e.VERSION);if(K.indexOf("WebGL")!==-1){ge=parseFloat(/^WebGL (\d)/.exec(K)[1]);y=ge>=1}else if(K.indexOf("OpenGL ES")!==-1){ge=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]);y=ge>=2}let J=null,ce={};const Ae=e.getParameter(e.SCISSOR_BOX),X=e.getParameter(e.VIEWPORT),ne=new Vector4().fromArray(Ae),Se=new Vector4().fromArray(X);function Ce(h,H,B,j){const ee=new Uint8Array(4),se=e.createTexture();e.bindTexture(h,se);e.texParameteri(h,e.TEXTURE_MIN_FILTER,e.NEAREST);e.texParameteri(h,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let xe=0;xe<B;xe++)if(h===e.TEXTURE_3D||h===e.TEXTURE_2D_ARRAY)e.texImage3D(H,0,e.RGBA,1,1,j,0,e.RGBA,e.UNSIGNED_BYTE,ee);else e.texImage2D(H+xe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ee);return se}const be={};be[e.TEXTURE_2D]=Ce(e.TEXTURE_2D,e.TEXTURE_2D,1);be[e.TEXTURE_CUBE_MAP]=Ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6);be[e.TEXTURE_2D_ARRAY]=Ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1);be[e.TEXTURE_3D]=Ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1);l.setClear(0,0,0,1);u.setClear(1);m.setClear(0);Me(e.DEPTH_TEST);u.setFunc(LessEqualDepth);dt(!1);Ye(CullFaceBack);Me(e.CULL_FACE);qe(NoBlending);function Me(h){if(W[h]!==!0){e.enable(h);W[h]=!0}}function ze(h){if(W[h]!==!1){e.disable(h);W[h]=!1}}function Ie(h,H){if(S[h]!==H){e.bindFramebuffer(h,H);S[h]=H;if(h===e.DRAW_FRAMEBUFFER)S[e.FRAMEBUFFER]=H;if(h===e.FRAMEBUFFER)S[e.DRAW_FRAMEBUFFER]=H;return!0}return!1}function we(h,H){let B=P,j=!1;if(h){B=T.get(H);if(B===void 0){B=[];T.set(H,B)}const ee=h.textures;if(B.length!==ee.length||B[0]!==e.COLOR_ATTACHMENT0){for(let se=0,xe=ee.length;se<xe;se++)B[se]=e.COLOR_ATTACHMENT0+se;B.length=ee.length;j=!0}}else if(B[0]!==e.BACK){B[0]=e.BACK;j=!0}if(j)e.drawBuffers(B)}function ke(h){if(O!==h){e.useProgram(h);O=h;return!0}return!1}const ye={[AddEquation]:e.FUNC_ADD,[SubtractEquation]:e.FUNC_SUBTRACT,[ReverseSubtractEquation]:e.FUNC_REVERSE_SUBTRACT};ye[MinEquation]=e.MIN;ye[MaxEquation]=e.MAX;const Ke={[ZeroFactor]:e.ZERO,[OneFactor]:e.ONE,[SrcColorFactor]:e.SRC_COLOR,[SrcAlphaFactor]:e.SRC_ALPHA,[SrcAlphaSaturateFactor]:e.SRC_ALPHA_SATURATE,[DstColorFactor]:e.DST_COLOR,[DstAlphaFactor]:e.DST_ALPHA,[OneMinusSrcColorFactor]:e.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:e.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:e.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:e.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:e.CONSTANT_COLOR,[OneMinusConstantColorFactor]:e.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:e.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:e.ONE_MINUS_CONSTANT_ALPHA};function qe(h,H,B,j,ee,se,xe,Ee,de,Te){if(h===NoBlending){if(c===!0){ze(e.BLEND);c=!1}return}if(c===!1){Me(e.BLEND);c=!0}if(h!==CustomBlending){if(h!==s||Te!==q){if(v!==AddEquation||M!==AddEquation){e.blendEquation(e.FUNC_ADD);v=AddEquation;M=AddEquation}if(Te)switch(h){case NormalBlending:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:e.blendFunc(e.ONE,e.ONE);break;case SubtractiveBlending:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case MultiplyBlending:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:error("WebGLState: Invalid blending: ",h);break}else switch(h){case NormalBlending:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case SubtractiveBlending:error("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case MultiplyBlending:error("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:error("WebGLState: Invalid blending: ",h);break}D=null;_=null;w=null;o=null;p.set(0,0,0);U=0;s=h;q=Te}return}ee=ee||H;se=se||B;xe=xe||j;if(H!==v||ee!==M){e.blendEquationSeparate(ye[H],ye[ee]);v=H;M=ee}if(B!==D||j!==_||se!==w||xe!==o){e.blendFuncSeparate(Ke[B],Ke[j],Ke[se],Ke[xe]);D=B;_=j;w=se;o=xe}if(Ee.equals(p)===!1||de!==U){e.blendColor(Ee.r,Ee.g,Ee.b,de);p.copy(Ee);U=de}s=h;q=!1}function st(h,H){h.side===DoubleSide?ze(e.CULL_FACE):Me(e.CULL_FACE);let B=h.side===BackSide;if(H)B=!B;dt(B);h.blending===NormalBlending&&h.transparent===!1?qe(NoBlending):qe(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha);u.setFunc(h.depthFunc);u.setTest(h.depthTest);u.setMask(h.depthWrite);l.setMask(h.colorWrite);const j=h.stencilWrite;m.setTest(j);if(j){m.setMask(h.stencilWriteMask);m.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask);m.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass)}lt(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits);h.alphaToCoverage===!0?Me(e.SAMPLE_ALPHA_TO_COVERAGE):ze(e.SAMPLE_ALPHA_TO_COVERAGE)}function dt(h){if(L!==h){if(h)e.frontFace(e.CW);else e.frontFace(e.CCW);L=h}}function Ye(h){if(h!==CullFaceNone){Me(e.CULL_FACE);if(h!==k)if(h===CullFaceBack)e.cullFace(e.BACK);else if(h===CullFaceFront)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else ze(e.CULL_FACE);k=h}function nt(h){if(h!==le){if(y)e.lineWidth(h);le=h}}function lt(h,H,B){if(h){Me(e.POLYGON_OFFSET_FILL);if(x!==H||Y!==B){x=H;Y=B;if(u.getReversed()){H=-H;B=-B}e.polygonOffset(H,B)}}else ze(e.POLYGON_OFFSET_FILL)}function ct(h){if(h)Me(e.SCISSOR_TEST);else ze(e.SCISSOR_TEST)}function ut(h){if(h===void 0)h=e.TEXTURE0+Q-1;if(J!==h){e.activeTexture(h);J=h}}function E(h,H,B){if(B===void 0)if(J===null)B=e.TEXTURE0+Q-1;else B=J;let j=ce[B];if(j===void 0){j={type:void 0,texture:void 0};ce[B]=j}if(j.type!==h||j.texture!==H){if(J!==B){e.activeTexture(B);J=B}e.bindTexture(h,H||be[h]);j.type=h;j.texture=H}}function pt(){const h=ce[J];if(h!==void 0&&h.type!==void 0){e.bindTexture(h.type,null);h.type=void 0;h.texture=void 0}}function Be(){try{e.compressedTexImage2D(...arguments)}catch(h){error("WebGLState:",h)}}function Je(){try{e.compressedTexImage3D(...arguments)}catch(h){error("WebGLState:",h)}}function fe(){try{e.texSubImage2D(...arguments)}catch(h){error("WebGLState:",h)}}function Ve(){try{e.texSubImage3D(...arguments)}catch(h){error("WebGLState:",h)}}function Re(){try{e.compressedTexSubImage2D(...arguments)}catch(h){error("WebGLState:",h)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(h){error("WebGLState:",h)}}function it(){try{e.texStorage2D(...arguments)}catch(h){error("WebGLState:",h)}}function f(){try{e.texStorage3D(...arguments)}catch(h){error("WebGLState:",h)}}function r(){try{e.texImage2D(...arguments)}catch(h){error("WebGLState:",h)}}function A(){try{e.texImage3D(...arguments)}catch(h){error("WebGLState:",h)}}function Z(h){if(I[h]!==void 0)return I[h];else return e.getParameter(h)}function z(h,H){if(I[h]!==H){e.pixelStorei(h,H);I[h]=H}}function te(h){if(ne.equals(h)===!1){e.scissor(h.x,h.y,h.z,h.w);ne.copy(h)}}function ae(h){if(Se.equals(h)===!1){e.viewport(h.x,h.y,h.z,h.w);Se.copy(h)}}function F(h,H){let B=b.get(H);if(B===void 0){B=new WeakMap;b.set(H,B)}let j=B.get(h);if(j===void 0){j=e.getUniformBlockIndex(H,h.name);e.uniformBlockBinding(H,j,j);B.set(h,j)}}function V(h,H,B){const ee=b.get(H).get(h);if(G[ee]!==B){e.bindBufferBase(e.UNIFORM_BUFFER,ee,B);G[ee]=B}}function ie(){e.disable(e.BLEND);e.disable(e.CULL_FACE);e.disable(e.DEPTH_TEST);e.disable(e.POLYGON_OFFSET_FILL);e.disable(e.SCISSOR_TEST);e.disable(e.STENCIL_TEST);e.disable(e.SAMPLE_ALPHA_TO_COVERAGE);e.blendEquation(e.FUNC_ADD);e.blendFunc(e.ONE,e.ZERO);e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO);e.blendColor(0,0,0,0);e.colorMask(!0,!0,!0,!0);e.clearColor(0,0,0,0);e.depthMask(!0);e.depthFunc(e.LESS);u.setReversed(!1);e.clearDepth(1);e.stencilMask(4294967295);e.stencilFunc(e.ALWAYS,0,4294967295);e.stencilOp(e.KEEP,e.KEEP,e.KEEP);e.clearStencil(0);e.cullFace(e.BACK);e.frontFace(e.CCW);e.polygonOffset(0,0);e.activeTexture(e.TEXTURE0);e.bindFramebuffer(e.FRAMEBUFFER,null);e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null);e.bindFramebuffer(e.READ_FRAMEBUFFER,null);e.useProgram(null);e.lineWidth(1);e.scissor(0,0,e.canvas.width,e.canvas.height);e.viewport(0,0,e.canvas.width,e.canvas.height);e.pixelStorei(e.PACK_ALIGNMENT,4);e.pixelStorei(e.UNPACK_ALIGNMENT,4);e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL);e.pixelStorei(e.PACK_ROW_LENGTH,0);e.pixelStorei(e.PACK_SKIP_PIXELS,0);e.pixelStorei(e.PACK_SKIP_ROWS,0);e.pixelStorei(e.UNPACK_ROW_LENGTH,0);e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0);e.pixelStorei(e.UNPACK_SKIP_PIXELS,0);e.pixelStorei(e.UNPACK_SKIP_ROWS,0);e.pixelStorei(e.UNPACK_SKIP_IMAGES,0);W={};I={};J=null;ce={};S={};G={};T=new WeakMap;P=[];O=null;c=!1;s=null;v=null;D=null;_=null;M=null;w=null;o=null;p=new Color(0,0,0);U=0;q=!1;L=null;k=null;le=null;x=null;Y=null;ne.set(0,0,e.canvas.width,e.canvas.height);Se.set(0,0,e.canvas.width,e.canvas.height);l.reset();u.reset();m.reset()}return{buffers:{color:l,depth:u,stencil:m},enable:Me,disable:ze,bindFramebuffer:Ie,drawBuffers:we,useProgram:ke,setBlending:qe,setMaterial:st,setFlipSided:dt,setCullFace:Ye,setLineWidth:nt,setPolygonOffset:lt,setScissorTest:ct,activeTexture:ut,bindTexture:E,unbindTexture:pt,compressedTexImage2D:Be,compressedTexImage3D:Je,texImage2D:r,texImage3D:A,pixelStorei:z,getParameter:Z,updateUBOMapping:F,uniformBlockBinding:V,texStorage2D:it,texStorage3D:f,texSubImage2D:fe,texSubImage3D:Ve,compressedTexSubImage2D:Re,compressedTexSubImage3D:Pe,scissor:te,viewport:ae,reset:ie}}function Rs(e,n,t,i,d,l,u){const m=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,G=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new Vector2,W=new WeakMap,I=new Set;let S;const T=new WeakMap,P=new Set,O=new FinalizationRegistry((f)=>P.delete(f));let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(f){}function s(f,r){return c?new OffscreenCanvas(f,r):Xn("canvas")}function v(f,r,A){let Z=1;const z=it(f);if(z.width>A||z.height>A)Z=A/Math.max(z.width,z.height);if(Z<1)if(typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&f instanceof ImageBitmap||typeof VideoFrame<"u"&&f instanceof VideoFrame){const te=Math.floor(Z*z.width),ae=Math.floor(Z*z.height);if(S===void 0)S=s(te,ae);const F=r?s(te,ae):S;F.width=te;F.height=ae;F.getContext("2d").drawImage(f,0,0,te,ae);warn("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+te+"x"+ae+").");return F}else{if("data"in f)warn("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+").");return f}return f}function D(f){return f.generateMipmaps}function _(f){e.generateMipmap(f)}function M(f){if(f.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(f.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(f.isWebGLArrayRenderTarget||f.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function w(f,r,A,Z,z,te=!1){if(f!==null){if(e[f]!==void 0)return e[f];warn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+f+"'")}let ae;if(Z){ae=n.get("EXT_texture_norm16");if(!ae)warn("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let F=r;if(r===e.RED){if(A===e.FLOAT)F=e.R32F;if(A===e.HALF_FLOAT)F=e.R16F;if(A===e.UNSIGNED_BYTE)F=e.R8;if(A===e.UNSIGNED_SHORT&&ae)F=ae.R16_EXT;if(A===e.SHORT&&ae)F=ae.R16_SNORM_EXT}if(r===e.RED_INTEGER){if(A===e.UNSIGNED_BYTE)F=e.R8UI;if(A===e.UNSIGNED_SHORT)F=e.R16UI;if(A===e.UNSIGNED_INT)F=e.R32UI;if(A===e.BYTE)F=e.R8I;if(A===e.SHORT)F=e.R16I;if(A===e.INT)F=e.R32I}if(r===e.RG){if(A===e.FLOAT)F=e.RG32F;if(A===e.HALF_FLOAT)F=e.RG16F;if(A===e.UNSIGNED_BYTE)F=e.RG8;if(A===e.UNSIGNED_SHORT&&ae)F=ae.RG16_EXT;if(A===e.SHORT&&ae)F=ae.RG16_SNORM_EXT}if(r===e.RG_INTEGER){if(A===e.UNSIGNED_BYTE)F=e.RG8UI;if(A===e.UNSIGNED_SHORT)F=e.RG16UI;if(A===e.UNSIGNED_INT)F=e.RG32UI;if(A===e.BYTE)F=e.RG8I;if(A===e.SHORT)F=e.RG16I;if(A===e.INT)F=e.RG32I}if(r===e.RGB_INTEGER){if(A===e.UNSIGNED_BYTE)F=e.RGB8UI;if(A===e.UNSIGNED_SHORT)F=e.RGB16UI;if(A===e.UNSIGNED_INT)F=e.RGB32UI;if(A===e.BYTE)F=e.RGB8I;if(A===e.SHORT)F=e.RGB16I;if(A===e.INT)F=e.RGB32I}if(r===e.RGBA_INTEGER){if(A===e.UNSIGNED_BYTE)F=e.RGBA8UI;if(A===e.UNSIGNED_SHORT)F=e.RGBA16UI;if(A===e.UNSIGNED_INT)F=e.RGBA32UI;if(A===e.BYTE)F=e.RGBA8I;if(A===e.SHORT)F=e.RGBA16I;if(A===e.INT)F=e.RGBA32I}if(r===e.RGB){if(A===e.UNSIGNED_SHORT&&ae)F=ae.RGB16_EXT;if(A===e.SHORT&&ae)F=ae.RGB16_SNORM_EXT;if(A===e.UNSIGNED_INT_5_9_9_9_REV)F=e.RGB9_E5;if(A===e.UNSIGNED_INT_10F_11F_11F_REV)F=e.R11F_G11F_B10F}if(r===e.RGBA){const V=te?LinearTransfer:ColorManagement.getTransfer(z);if(A===e.FLOAT)F=e.RGBA32F;if(A===e.HALF_FLOAT)F=e.RGBA16F;if(A===e.UNSIGNED_BYTE)F=V===SRGBTransfer?e.SRGB8_ALPHA8:e.RGBA8;if(A===e.UNSIGNED_SHORT&&ae)F=ae.RGBA16_EXT;if(A===e.SHORT&&ae)F=ae.RGBA16_SNORM_EXT;if(A===e.UNSIGNED_SHORT_4_4_4_4)F=e.RGBA4;if(A===e.UNSIGNED_SHORT_5_5_5_1)F=e.RGB5_A1}if(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)n.get("EXT_color_buffer_float");return F}function o(f,r){let A;if(f){if(r===null||r===UnsignedIntType||r===UnsignedInt248Type)A=e.DEPTH24_STENCIL8;else if(r===FloatType)A=e.DEPTH32F_STENCIL8;else if(r===UnsignedShortType){A=e.DEPTH24_STENCIL8;warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}}else if(r===null||r===UnsignedIntType||r===UnsignedInt248Type)A=e.DEPTH_COMPONENT24;else if(r===FloatType)A=e.DEPTH_COMPONENT32F;else if(r===UnsignedShortType)A=e.DEPTH_COMPONENT16;return A}function p(f,r){if(D(f)===!0||f.isFramebufferTexture&&f.minFilter!==NearestFilter&&f.minFilter!==LinearFilter)return Math.log2(Math.max(r.width,r.height))+1;else if(f.mipmaps.length>0)return f.mipmaps.length;else if(f.isCompressedTexture&&Array.isArray(f.image))return r.mipmaps.length;else return 1}function U(f){const r=new WeakRef(f);i.get(f).__ref=r;P.add(r);O.register(f,r,r)}function q(f){const r=i.get(f).__ref;if(r===void 0)return;P.delete(r);O.unregister(r)}function L(f){le(f.target)}function k(f){x(f.target)}function le(f){f.removeEventListener("dispose",L);q(f);Q(f);if(f.isVideoTexture)W.delete(f);if(f.isHTMLTexture)I.delete(f)}function x(f){f.removeEventListener("dispose",k);q(f);ge(f)}function Y(){for(const f of P){const r=f.deref();if(r===void 0)continue;if(r.isRenderTarget===!0)x(r);else le(r)}P.clear();I.clear()}function Q(f){const r=i.get(f);if(r.__webglInit===void 0)return;const A=f.source,Z=T.get(A);if(Z){const z=Z[r.__cacheKey];z.usedTimes--;if(z.usedTimes===0)y(f);if(Object.keys(Z).length===0)T.delete(A)}i.remove(f)}function y(f){const r=i.get(f);e.deleteTexture(r.__webglTexture);const A=f.source,Z=T.get(A);delete Z[r.__cacheKey];u.memory.textures--}function ge(f){const r=i.get(f);if(r.__depthDisposeCallback)r.__depthDisposeCallback();const A=f.depthTexture;if(A&&A.renderTarget===f)le(A);if(f.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(r.__webglFramebuffer[z]))for(let te=0;te<r.__webglFramebuffer[z].length;te++)e.deleteFramebuffer(r.__webglFramebuffer[z][te]);else e.deleteFramebuffer(r.__webglFramebuffer[z]);if(r.__webglDepthbuffer)e.deleteRenderbuffer(r.__webglDepthbuffer[z])}else{if(Array.isArray(r.__webglFramebuffer))for(let z=0;z<r.__webglFramebuffer.length;z++)e.deleteFramebuffer(r.__webglFramebuffer[z]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer)e.deleteRenderbuffer(r.__webglDepthbuffer);if(r.__webglMultisampledFramebuffer)e.deleteFramebuffer(r.__webglMultisampledFramebuffer);if(r.__webglColorRenderbuffer){for(let z=0;z<r.__webglColorRenderbuffer.length;z++)if(r.__webglColorRenderbuffer[z])e.deleteRenderbuffer(r.__webglColorRenderbuffer[z])}if(r.__webglDepthRenderbuffer)e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}const Z=f.textures;for(let z=0,te=Z.length;z<te;z++){const ae=i.get(Z[z]);if(ae.__webglTexture){e.deleteTexture(ae.__webglTexture);u.memory.textures--}i.remove(Z[z])}i.remove(f)}let K=0;function J(){K=0}function ce(){return K}function Ae(f){K=f}function X(){const f=K;if(f>=d.maxTextures)warn("WebGLTextures: Trying to use "+(f+1)+" texture units while this GPU supports only "+d.maxTextures);K+=1;return f}function ne(f){const r=[];r.push(f.wrapS);r.push(f.wrapT);r.push(f.wrapR||0);r.push(f.magFilter);r.push(f.minFilter);r.push(f.anisotropy);r.push(f.internalFormat);r.push(f.format);r.push(f.type);r.push(f.generateMipmaps);r.push(f.mipmapsAutoUpdate);r.push(f.premultiplyAlpha);r.push(f.flipY);r.push(f.unpackAlignment);r.push(f.colorSpace);return r.join()}function Se(f,r){const A=i.get(f);if(f.isVideoTexture)Re(f);if(f.isRenderTargetTexture===!1&&f.isExternalTexture!==!0&&f.version>0&&A.__version!==f.version){const Z=f.image;if(Z===null)warn("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)warn("WebGLRenderer: Texture marked for update but image is incomplete");else{st(A,f,r);return}}else if(f.isExternalTexture)A.__webglTexture=f.sourceTexture?f.sourceTexture:null;t.bindTexture(e.TEXTURE_2D,A.__webglTexture,e.TEXTURE0+r)}function Ce(f,r){const A=i.get(f);if(f.isRenderTargetTexture===!1&&f.version>0&&A.__version!==f.version){st(A,f,r);return}else if(f.isExternalTexture)A.__webglTexture=f.sourceTexture?f.sourceTexture:null;t.bindTexture(e.TEXTURE_2D_ARRAY,A.__webglTexture,e.TEXTURE0+r)}function be(f,r){const A=i.get(f);if(f.isRenderTargetTexture===!1&&f.version>0&&A.__version!==f.version){st(A,f,r);return}t.bindTexture(e.TEXTURE_3D,A.__webglTexture,e.TEXTURE0+r)}function Me(f,r){const A=i.get(f);if(f.version>0&&A.__version!==f.version){dt(A,f,r);return}t.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+r)}const ze={[RepeatWrapping]:e.REPEAT,[ClampToEdgeWrapping]:e.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:e.MIRRORED_REPEAT},Ie={[NearestFilter]:e.NEAREST,[NearestMipmapNearestFilter]:e.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:e.NEAREST_MIPMAP_LINEAR,[LinearFilter]:e.LINEAR,[LinearMipmapNearestFilter]:e.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:e.LINEAR_MIPMAP_LINEAR},we={[NeverCompare]:e.NEVER,[AlwaysCompare]:e.ALWAYS,[LessCompare]:e.LESS,[LessEqualCompare]:e.LEQUAL,[EqualCompare]:e.EQUAL,[GreaterEqualCompare]:e.GEQUAL,[GreaterCompare]:e.GREATER,[NotEqualCompare]:e.NOTEQUAL};function ke(f,r){if(r.type===FloatType&&n.has("OES_texture_float_linear")===!1&&(r.magFilter===LinearFilter||r.magFilter===LinearMipmapNearestFilter||r.magFilter===NearestMipmapLinearFilter||r.magFilter===LinearMipmapLinearFilter||r.minFilter===LinearFilter||r.minFilter===LinearMipmapNearestFilter||r.minFilter===NearestMipmapLinearFilter||r.minFilter===LinearMipmapLinearFilter))warn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");e.texParameteri(f,e.TEXTURE_WRAP_S,ze[r.wrapS]);e.texParameteri(f,e.TEXTURE_WRAP_T,ze[r.wrapT]);if(f===e.TEXTURE_3D||f===e.TEXTURE_2D_ARRAY)e.texParameteri(f,e.TEXTURE_WRAP_R,ze[r.wrapR]);e.texParameteri(f,e.TEXTURE_MAG_FILTER,Ie[r.magFilter]);e.texParameteri(f,e.TEXTURE_MIN_FILTER,Ie[r.minFilter]);if(r.compareFunction){e.texParameteri(f,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE);e.texParameteri(f,e.TEXTURE_COMPARE_FUNC,we[r.compareFunction])}if(n.has("EXT_texture_filter_anisotropic")===!0){if(r.magFilter===NearestFilter)return;if(r.minFilter!==NearestMipmapLinearFilter&&r.minFilter!==LinearMipmapLinearFilter)return;if(r.type===FloatType&&n.has("OES_texture_float_linear")===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){const A=n.get("EXT_texture_filter_anisotropic");e.texParameterf(f,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,d.getMaxAnisotropy()));i.get(r).__currentAnisotropy=r.anisotropy}}}function ye(f,r){let A=!1;if(f.__webglInit===void 0){f.__webglInit=!0;r.addEventListener("dispose",L);U(r)}const Z=r.source;let z=T.get(Z);if(z===void 0){z={};T.set(Z,z)}const te=ne(r);if(te!==f.__cacheKey){if(z[te]===void 0){z[te]={texture:e.createTexture(),usedTimes:0};u.memory.textures++;A=!0}z[te].usedTimes++;const ae=z[f.__cacheKey];if(ae!==void 0){z[f.__cacheKey].usedTimes--;if(ae.usedTimes===0)y(r)}f.__cacheKey=te;f.__webglTexture=z[te].texture}return A}function Ke(f,r,A){return Math.floor(Math.floor(f/A)/r)}function qe(f,r,A,Z){const z=4,te=f.updateRanges;if(te.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,A,Z,r.data);else{te.sort((h,H)=>h.start-H.start);let ae=0;for(let h=1;h<te.length;h++){const H=te[ae],B=te[h],j=H.start+H.count,ee=Ke(B.start,r.width,z),se=Ke(H.start,r.width,z);if(B.start<=j+1&&ee===se&&Ke(B.start+B.count-1,r.width,z)===ee)H.count=Math.max(H.count,B.start+B.count-H.start);else{++ae;te[ae]=B}}te.length=ae+1;const F=t.getParameter(e.UNPACK_ROW_LENGTH),V=t.getParameter(e.UNPACK_SKIP_PIXELS),ie=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let h=0,H=te.length;h<H;h++){const B=te[h],j=Math.floor(B.start/z),ee=Math.ceil(B.count/z),se=j%r.width,xe=Math.floor(j/r.width),Ee=ee,de=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,se);t.pixelStorei(e.UNPACK_SKIP_ROWS,xe);t.texSubImage2D(e.TEXTURE_2D,0,se,xe,Ee,de,A,Z,r.data)}f.clearUpdateRanges();t.pixelStorei(e.UNPACK_ROW_LENGTH,F);t.pixelStorei(e.UNPACK_SKIP_PIXELS,V);t.pixelStorei(e.UNPACK_SKIP_ROWS,ie)}}function st(f,r,A){let Z=e.TEXTURE_2D;if(r.isDataArrayTexture||r.isCompressedArrayTexture)Z=e.TEXTURE_2D_ARRAY;if(r.isData3DTexture)Z=e.TEXTURE_3D;const z=ye(f,r),te=r.source;t.bindTexture(Z,f.__webglTexture,e.TEXTURE0+A);const ae=i.get(te);if(te.version!==ae.__version||z===!0){t.activeTexture(e.TEXTURE0+A);if((typeof ImageBitmap<"u"&&r.image instanceof ImageBitmap)===!1){const de=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),Te=r.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(r.colorSpace),De=r.colorSpace===NoColorSpace||de===Te?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY);t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha);t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let V=v(r.image,!1,d.maxTextureSize);V=Pe(r,V);const ie=l.convert(r.format,r.colorSpace),h=l.convert(r.type);let H=w(r.internalFormat,ie,h,r.normalized,r.colorSpace,r.isVideoTexture);ke(Z,r);let B;const j=r.mipmaps,ee=r.isVideoTexture!==!0,se=ae.__version===void 0||z===!0,xe=te.dataReady,Ee=p(r,V);if(r.isDepthTexture){H=o(r.format===DepthStencilFormat,r.type);if(se)if(ee)t.texStorage2D(e.TEXTURE_2D,1,H,V.width,V.height);else t.texImage2D(e.TEXTURE_2D,0,H,V.width,V.height,0,ie,h,null)}else if(r.isDataTexture)if(j.length>0){if(ee&&se)t.texStorage2D(e.TEXTURE_2D,Ee,H,j[0].width,j[0].height);for(let de=0,Te=j.length;de<Te;de++){B=j[de];if(ee){if(xe)t.texSubImage2D(e.TEXTURE_2D,de,0,0,B.width,B.height,ie,h,B.data)}else t.texImage2D(e.TEXTURE_2D,de,H,B.width,B.height,0,ie,h,B.data)}r.generateMipmaps=!1}else if(ee){if(se)t.texStorage2D(e.TEXTURE_2D,Ee,H,V.width,V.height);if(xe)qe(r,V,ie,h)}else t.texImage2D(e.TEXTURE_2D,0,H,V.width,V.height,0,ie,h,V.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){if(ee&&se)t.texStorage3D(e.TEXTURE_2D_ARRAY,Ee,H,j[0].width,j[0].height,V.depth);for(let de=0,Te=j.length;de<Te;de++){B=j[de];if(r.format!==RGBAFormat)if(ie!==null)if(ee){if(xe)if(r.layerUpdates.size>0){const De=Qt(B.width,B.height,r.format,r.type);for(const ue of r.layerUpdates){const Ge=B.data.subarray(ue*De/B.data.BYTES_PER_ELEMENT,(ue+1)*De/B.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,ue,B.width,B.height,1,ie,Ge)}}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,B.width,B.height,V.depth,ie,B.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,de,H,B.width,B.height,V.depth,0,B.data,0,0);else warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ee){if(xe)t.texSubImage3D(e.TEXTURE_2D_ARRAY,de,0,0,0,B.width,B.height,V.depth,ie,h,B.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,de,H,B.width,B.height,V.depth,0,ie,h,B.data)}if(r.layerUpdates.size>0)r.clearLayerUpdates()}else{if(ee&&se)t.texStorage2D(e.TEXTURE_2D,Ee,H,j[0].width,j[0].height);for(let de=0,Te=j.length;de<Te;de++){B=j[de];if(r.format!==RGBAFormat)if(ie!==null)if(ee){if(xe)t.compressedTexSubImage2D(e.TEXTURE_2D,de,0,0,B.width,B.height,ie,B.data)}else t.compressedTexImage2D(e.TEXTURE_2D,de,H,B.width,B.height,0,B.data);else warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ee){if(xe)t.texSubImage2D(e.TEXTURE_2D,de,0,0,B.width,B.height,ie,h,B.data)}else t.texImage2D(e.TEXTURE_2D,de,H,B.width,B.height,0,ie,h,B.data)}}else if(r.isDataArrayTexture)if(ee){if(se)t.texStorage3D(e.TEXTURE_2D_ARRAY,Ee,H,V.width,V.height,V.depth);if(xe)if(r.layerUpdates.size>0){const de=Qt(V.width,V.height,r.format,r.type);for(const Te of r.layerUpdates){const De=V.data.subarray(Te*de/V.data.BYTES_PER_ELEMENT,(Te+1)*de/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Te,V.width,V.height,1,ie,h,De)}r.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,ie,h,V.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,H,V.width,V.height,V.depth,0,ie,h,V.data);else if(r.isData3DTexture)if(ee){if(se)t.texStorage3D(e.TEXTURE_3D,Ee,H,V.width,V.height,V.depth);if(xe)t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,ie,h,V.data)}else t.texImage3D(e.TEXTURE_3D,0,H,V.width,V.height,V.depth,0,ie,h,V.data);else if(r.isFramebufferTexture){if(se)if(ee)t.texStorage2D(e.TEXTURE_2D,Ee,H,V.width,V.height);else{let de=V.width,Te=V.height;for(let De=0;De<Ee;De++){t.texImage2D(e.TEXTURE_2D,De,H,de,Te,0,ie,h,null);de>>=1;Te>>=1}}}else if(r.isHTMLTexture){if("texElementImage2D"in e){const de=e.canvas;if(!de.hasAttribute("layoutsubtree"))de.setAttribute("layoutsubtree","true");if(V.parentNode!==de){de.appendChild(V);I.add(r);de.onpaint=(Te)=>{const De=Te.changedElements;for(const ue of I)if(De.includes(ue.image))ue.needsUpdate=!0};de.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,V);else{const Te=0,{RGBA:De,RGBA:ue,UNSIGNED_BYTE:Ge}=e;e.texElementImage2D(e.TEXTURE_2D,Te,De,ue,Ge,V)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(j.length>0){if(ee&&se){const de=it(j[0]);t.texStorage2D(e.TEXTURE_2D,Ee,H,de.width,de.height)}for(let de=0,Te=j.length;de<Te;de++){B=j[de];if(ee){if(xe)t.texSubImage2D(e.TEXTURE_2D,de,0,0,ie,h,B)}else t.texImage2D(e.TEXTURE_2D,de,H,ie,h,B)}r.generateMipmaps=!1}else if(ee){if(se){const de=it(V);t.texStorage2D(e.TEXTURE_2D,Ee,H,de.width,de.height)}if(xe)t.texSubImage2D(e.TEXTURE_2D,0,0,0,ie,h,V)}else t.texImage2D(e.TEXTURE_2D,0,H,ie,h,V);if(D(r)&&r.mipmapsAutoUpdate===!0)_(Z);ae.__version=te.version;if(r.onUpdate)r.onUpdate(r)}f.__version=r.version}function dt(f,r,A){if(r.image.length!==6)return;const Z=ye(f,r),z=r.source;t.bindTexture(e.TEXTURE_CUBE_MAP,f.__webglTexture,e.TEXTURE0+A);const te=i.get(z);if(z.version!==te.__version||Z===!0){t.activeTexture(e.TEXTURE0+A);const ae=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),F=r.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(r.colorSpace),V=r.colorSpace===NoColorSpace||ae===F?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY);t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha);t.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);const ie=r.isCompressedTexture||r.image[0].isCompressedTexture,h=r.image[0]&&r.image[0].isDataTexture,H=[];for(let ue=0;ue<6;ue++){if(!ie&&!h)H[ue]=v(r.image[ue],!0,d.maxCubemapSize);else H[ue]=h?r.image[ue].image:r.image[ue];H[ue]=Pe(r,H[ue])}const B=H[0],j=l.convert(r.format,r.colorSpace),ee=l.convert(r.type);let se=w(r.internalFormat,j,ee,r.normalized,r.colorSpace);const xe=r.isVideoTexture!==!0,Ee=te.__version===void 0||Z===!0,de=z.dataReady;let Te=p(r,B);ke(e.TEXTURE_CUBE_MAP,r);let De;if(r.isDepthTexture){se=o(r.format===DepthStencilFormat,r.type);if(Ee)if(xe)t.texStorage2D(e.TEXTURE_CUBE_MAP,1,se,B.width,B.height);else for(let ue=0;ue<6;ue++)t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,se,B.width,B.height,0,j,ee,null)}else if(ie){if(xe&&Ee)t.texStorage2D(e.TEXTURE_CUBE_MAP,Te,se,B.width,B.height);for(let ue=0;ue<6;ue++){De=H[ue].mipmaps;for(let Ge=0;Ge<De.length;Ge++){const je=De[Ge];if(r.format!==RGBAFormat)if(j!==null)if(xe){if(de)t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge,0,0,je.width,je.height,j,je.data)}else t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge,se,je.width,je.height,0,je.data);else warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(xe){if(de)t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge,0,0,je.width,je.height,j,ee,je.data)}else t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge,se,je.width,je.height,0,j,ee,je.data)}}}else{De=r.mipmaps;if(xe&&Ee){if(De.length>0)Te++;const ue=it(H[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,Te,se,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(h){if(xe){if(de)t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,H[ue].width,H[ue].height,j,ee,H[ue].data)}else t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,se,H[ue].width,H[ue].height,0,j,ee,H[ue].data);for(let Ge=0;Ge<De.length;Ge++){const _t=De[Ge].image[ue].image;if(xe){if(de)t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge+1,0,0,_t.width,_t.height,j,ee,_t.data)}else t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge+1,se,_t.width,_t.height,0,j,ee,_t.data)}}else{if(xe){if(de)t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,j,ee,H[ue])}else t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,se,j,ee,H[ue]);for(let Ge=0;Ge<De.length;Ge++){const je=De[Ge];if(xe){if(de)t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge+1,0,0,j,ee,je.image[ue])}else t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ge+1,se,j,ee,je.image[ue])}}}if(D(r)&&r.mipmapsAutoUpdate===!0)_(e.TEXTURE_CUBE_MAP);te.__version=z.version;if(r.onUpdate)r.onUpdate(r)}f.__version=r.version}function Ye(f,r,A,Z,z,te){const ae=l.convert(A.format,A.colorSpace),F=l.convert(A.type),V=w(A.internalFormat,ae,F,A.normalized,A.colorSpace),ie=i.get(r),h=i.get(A);h.__renderTarget=r;if(!ie.__hasExternalTextures){const H=Math.max(1,r.width>>te),B=Math.max(1,r.height>>te);if(z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY)t.texImage3D(z,te,V,H,B,r.depth,0,ae,F,null);else t.texImage2D(z,te,V,H,B,0,ae,F,null)}t.bindFramebuffer(e.FRAMEBUFFER,f);if(Ve(r))m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,z,h.__webglTexture,0,fe(r));else if(z===e.TEXTURE_2D||z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,Z,z,h.__webglTexture,te);t.bindFramebuffer(e.FRAMEBUFFER,null)}function nt(f,r,A){e.bindRenderbuffer(e.RENDERBUFFER,f);if(r.depthBuffer){const Z=r.depthTexture,z=Z&&Z.isDepthTexture?Z.type:null,te=o(r.stencilBuffer,z),ae=r.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(Ve(r))m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(r),te,r.width,r.height);else if(A)e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(r),te,r.width,r.height);else e.renderbufferStorage(e.RENDERBUFFER,te,r.width,r.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,f)}else{const Z=r.textures;for(let z=0;z<Z.length;z++){const te=Z[z],ae=l.convert(te.format,te.colorSpace),F=l.convert(te.type),V=w(te.internalFormat,ae,F,te.normalized,te.colorSpace);if(Ve(r))m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(r),V,r.width,r.height);else if(A)e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(r),V,r.width,r.height);else e.renderbufferStorage(e.RENDERBUFFER,V,r.width,r.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function lt(f,r,A){const Z=r.isWebGLCubeRenderTarget===!0;t.bindFramebuffer(e.FRAMEBUFFER,f);if(!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const z=i.get(r.depthTexture);z.__renderTarget=r;const te=Z?r.depthTexture.image[0]:r.depthTexture.image;if(!z.__webglTexture||te.width!==r.width||te.height!==r.height){te.width=r.width;te.height=r.height;r.depthTexture.needsUpdate=!0}if(Z)Me(r.depthTexture,0);else Se(r.depthTexture,0);const ae=z.__webglTexture,F=fe(r),V=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+A:e.TEXTURE_2D,ie=r.depthTexture.format===DepthStencilFormat?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===DepthFormat)if(Ve(r))m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,V,ae,0,F);else e.framebufferTexture2D(e.FRAMEBUFFER,ie,V,ae,0);else if(r.depthTexture.format===DepthStencilFormat)if(Ve(r))m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,V,ae,0,F);else e.framebufferTexture2D(e.FRAMEBUFFER,ie,V,ae,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(f){const r=i.get(f),A=f.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==f.depthTexture){const Z=f.depthTexture;if(r.__depthDisposeCallback)r.__depthDisposeCallback();if(Z){const z=()=>{delete r.__boundDepthTexture;delete r.__depthDisposeCallback;Z.removeEventListener("dispose",z)};Z.addEventListener("dispose",z);r.__depthDisposeCallback=z}r.__boundDepthTexture=Z}if(f.depthTexture&&!r.__autoAllocateDepthBuffer)if(A)for(let Z=0;Z<6;Z++)lt(r.__webglFramebuffer[Z],f,Z);else if(f.texture.mipmaps.length>0)lt(r.__webglFramebuffer[0],f,0);else lt(r.__webglFramebuffer,f,0);else if(A){r.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++){t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[Z]);if(r.__webglDepthbuffer[Z]===void 0){r.__webglDepthbuffer[Z]=e.createRenderbuffer();nt(r.__webglDepthbuffer[Z],f,!1)}else{const z=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=r.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,te);e.framebufferRenderbuffer(e.FRAMEBUFFER,z,e.RENDERBUFFER,te)}}}else{if(f.texture.mipmaps.length>0)t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]);else t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer);if(r.__webglDepthbuffer===void 0){r.__webglDepthbuffer=e.createRenderbuffer();nt(r.__webglDepthbuffer,f,!1)}else{const z=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te);e.framebufferRenderbuffer(e.FRAMEBUFFER,z,e.RENDERBUFFER,te)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ut(f,r,A){const Z=i.get(f);if(r!==void 0)Ye(Z.__webglFramebuffer,f,f.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(A!==void 0)ct(f)}function E(f){const r=f.texture,A=i.get(f),Z=i.get(r);f.addEventListener("dispose",k);U(f);const z=f.textures,te=f.isWebGLCubeRenderTarget===!0,ae=z.length>1;if(!ae){if(Z.__webglTexture===void 0)Z.__webglTexture=e.createTexture();Z.__version=r.version;u.memory.textures++}if(te){A.__webglFramebuffer=[];for(let F=0;F<6;F++)if(r.mipmaps.length>0){A.__webglFramebuffer[F]=[];for(let V=0;V<r.mipmaps.length;V++)A.__webglFramebuffer[F][V]=e.createFramebuffer()}else A.__webglFramebuffer[F]=e.createFramebuffer()}else{if(r.mipmaps.length>0){A.__webglFramebuffer=[];for(let F=0;F<r.mipmaps.length;F++)A.__webglFramebuffer[F]=e.createFramebuffer()}else A.__webglFramebuffer=e.createFramebuffer();if(ae)for(let F=0,V=z.length;F<V;F++){const ie=i.get(z[F]);if(ie.__webglTexture===void 0){ie.__webglTexture=e.createTexture();u.memory.textures++}}if(f.samples>0&&Ve(f)===!1){A.__webglMultisampledFramebuffer=e.createFramebuffer();A.__webglColorRenderbuffer=[];t.bindFramebuffer(e.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let F=0;F<z.length;F++){const V=z[F];A.__webglColorRenderbuffer[F]=e.createRenderbuffer();e.bindRenderbuffer(e.RENDERBUFFER,A.__webglColorRenderbuffer[F]);const ie=l.convert(V.format,V.colorSpace),h=l.convert(V.type),H=w(V.internalFormat,ie,h,V.normalized,V.colorSpace,f.isXRRenderTarget===!0),B=fe(f);e.renderbufferStorageMultisample(e.RENDERBUFFER,B,H,f.width,f.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+F,e.RENDERBUFFER,A.__webglColorRenderbuffer[F])}e.bindRenderbuffer(e.RENDERBUFFER,null);if(f.depthBuffer){A.__webglDepthRenderbuffer=e.createRenderbuffer();nt(A.__webglDepthRenderbuffer,f,!0)}t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){t.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture);ke(e.TEXTURE_CUBE_MAP,r);for(let F=0;F<6;F++)if(r.mipmaps.length>0)for(let V=0;V<r.mipmaps.length;V++)Ye(A.__webglFramebuffer[F][V],f,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+F,V);else Ye(A.__webglFramebuffer[F],f,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);if(D(r))_(e.TEXTURE_CUBE_MAP);else if(r.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1);t.unbindTexture()}else if(ae){for(let F=0,V=z.length;F<V;F++){const ie=z[F],h=i.get(ie);let H=e.TEXTURE_2D;if(f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)H=f.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;t.bindTexture(H,h.__webglTexture);ke(H,ie);Ye(A.__webglFramebuffer,f,ie,e.COLOR_ATTACHMENT0+F,H,0);if(D(ie))_(H)}t.unbindTexture()}else{let F=e.TEXTURE_2D;if(f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)F=f.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;t.bindTexture(F,Z.__webglTexture);ke(F,r);if(r.mipmaps.length>0)for(let V=0;V<r.mipmaps.length;V++)Ye(A.__webglFramebuffer[V],f,r,e.COLOR_ATTACHMENT0,F,V);else Ye(A.__webglFramebuffer,f,r,e.COLOR_ATTACHMENT0,F,0);if(D(r))_(F);else if(r.mipmaps.length>0)e.texParameteri(F,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1);t.unbindTexture()}if(f.depthBuffer)ct(f)}function pt(f){const r=f.textures;for(let A=0,Z=r.length;A<Z;A++){const z=r[A];if(D(z)&&z.mipmapsAutoUpdate===!0){const te=M(f),ae=i.get(z).__webglTexture;t.bindTexture(te,ae);_(te);t.unbindTexture()}}}const Be=[];function Je(f){if(f.samples>0){if(Ve(f)===!1){const{textures:r,width:A,height:Z}=f;let z=e.COLOR_BUFFER_BIT;const te=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=i.get(f),F=r.length>1;if(F)for(let ie=0;ie<r.length;ie++){t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,null);t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglFramebuffer);e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.TEXTURE_2D,null,0)}t.bindFramebuffer(e.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);if(f.texture.mipmaps.length>0)t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]);else t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ie=0;ie<r.length;ie++){if(f.resolveDepthBuffer){if(f.depthBuffer)z|=e.DEPTH_BUFFER_BIT;if(f.stencilBuffer&&f.resolveStencilBuffer)z|=e.STENCIL_BUFFER_BIT}if(F){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ae.__webglColorRenderbuffer[ie]);const h=i.get(r[ie]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,h,0)}e.blitFramebuffer(0,0,A,Z,0,0,A,Z,z,e.NEAREST);if(G===!0){Be.length=0;Be.push(e.COLOR_ATTACHMENT0+ie);if(f.depthBuffer&&f.storeMultisampledDepthBuffer===!1)Be.push(te);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Be)}}t.bindFramebuffer(e.READ_FRAMEBUFFER,null);t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null);if(F)for(let ie=0;ie<r.length;ie++){t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,ae.__webglColorRenderbuffer[ie]);const h=i.get(r[ie]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ae.__webglFramebuffer);e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.TEXTURE_2D,h,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(f.depthBuffer&&f.storeMultisampledDepthBuffer===!1&&G){const r=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[r])}}}function fe(f){return Math.min(d.maxSamples,f.samples)}function Ve(f){const r=i.get(f);return f.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}function Re(f){const r=u.render.frame;if(W.get(f)!==r){W.set(f,r);f.update()}}function Pe(f,r){const{colorSpace:A,format:Z,type:z}=f;if(f.isCompressedTexture===!0||f.isVideoTexture===!0)return r;if(A!==LinearSRGBColorSpace&&A!==NoColorSpace)if(ColorManagement.getTransfer(A)===SRGBTransfer){if(Z!==RGBAFormat||z!==UnsignedByteType)warn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else error("WebGLTextures: Unsupported texture color space:",A);return r}function it(f){if(typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement){b.width=f.naturalWidth||f.width;b.height=f.naturalHeight||f.height}else if(typeof VideoFrame<"u"&&f instanceof VideoFrame){b.width=f.displayWidth;b.height=f.displayHeight}else{b.width=f.width;b.height=f.height}return b}this.allocateTextureUnit=X;this.resetTextureUnits=J;this.getTextureUnits=ce;this.setTextureUnits=Ae;this.setTexture2D=Se;this.setTexture2DArray=Ce;this.setTexture3D=be;this.setTextureCube=Me;this.rebindTextures=ut;this.setupRenderTarget=E;this.updateRenderTargetMipmap=pt;this.updateMultisampleRenderTarget=Je;this.setupDepthRenderbuffer=ct;this.setupFrameBufferTexture=Ye;this.useMultisampledRTT=Ve;this.dispose=Y}function WebGLUtils(e,n){function t(i,d=NoColorSpace){let l;const u=ColorManagement.getTransfer(d);if(i===UnsignedByteType)return e.UNSIGNED_BYTE;if(i===UnsignedShort4444Type)return e.UNSIGNED_SHORT_4_4_4_4;if(i===UnsignedShort5551Type)return e.UNSIGNED_SHORT_5_5_5_1;if(i===UnsignedInt5999Type)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===UnsignedInt101111Type)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===ByteType)return e.BYTE;if(i===ShortType)return e.SHORT;if(i===UnsignedShortType)return e.UNSIGNED_SHORT;if(i===IntType)return e.INT;if(i===UnsignedIntType)return e.UNSIGNED_INT;if(i===FloatType)return e.FLOAT;if(i===HalfFloatType)return e.HALF_FLOAT;if(i===AlphaFormat)return e.ALPHA;if(i===RGBFormat)return e.RGB;if(i===RGBAFormat)return e.RGBA;if(i===DepthFormat)return e.DEPTH_COMPONENT;if(i===DepthStencilFormat)return e.DEPTH_STENCIL;if(i===RedFormat)return e.RED;if(i===RedIntegerFormat)return e.RED_INTEGER;if(i===RGFormat)return e.RG;if(i===RGIntegerFormat)return e.RG_INTEGER;if(i===RGBAIntegerFormat)return e.RGBA_INTEGER;if(i===RGB_S3TC_DXT1_Format||i===RGBA_S3TC_DXT1_Format||i===RGBA_S3TC_DXT3_Format||i===RGBA_S3TC_DXT5_Format)if(u===SRGBTransfer){l=n.get("WEBGL_compressed_texture_s3tc_srgb");if(l!==null){if(i===RGB_S3TC_DXT1_Format)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else{l=n.get("WEBGL_compressed_texture_s3tc");if(l!==null){if(i===RGB_S3TC_DXT1_Format)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT1_Format)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===RGBA_S3TC_DXT3_Format)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===RGBA_S3TC_DXT5_Format)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(i===RGB_PVRTC_4BPPV1_Format||i===RGB_PVRTC_2BPPV1_Format||i===RGBA_PVRTC_4BPPV1_Format||i===RGBA_PVRTC_2BPPV1_Format){l=n.get("WEBGL_compressed_texture_pvrtc");if(l!==null){if(i===RGB_PVRTC_4BPPV1_Format)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===RGB_PVRTC_2BPPV1_Format)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===RGBA_PVRTC_4BPPV1_Format)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===RGBA_PVRTC_2BPPV1_Format)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(i===RGB_ETC1_Format||i===RGB_ETC2_Format||i===RGBA_ETC2_EAC_Format||i===R11_EAC_Format||i===SIGNED_R11_EAC_Format||i===RG11_EAC_Format||i===SIGNED_RG11_EAC_Format){l=n.get("WEBGL_compressed_texture_etc");if(l!==null){if(i===RGB_ETC1_Format||i===RGB_ETC2_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===RGBA_ETC2_EAC_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===R11_EAC_Format)return l.COMPRESSED_R11_EAC;if(i===SIGNED_R11_EAC_Format)return l.COMPRESSED_SIGNED_R11_EAC;if(i===RG11_EAC_Format)return l.COMPRESSED_RG11_EAC;if(i===SIGNED_RG11_EAC_Format)return l.COMPRESSED_SIGNED_RG11_EAC}else return null}if(i===RGBA_ASTC_4x4_Format||i===RGBA_ASTC_5x4_Format||i===RGBA_ASTC_5x5_Format||i===RGBA_ASTC_6x5_Format||i===RGBA_ASTC_6x6_Format||i===RGBA_ASTC_8x5_Format||i===RGBA_ASTC_8x6_Format||i===RGBA_ASTC_8x8_Format||i===RGBA_ASTC_10x5_Format||i===RGBA_ASTC_10x6_Format||i===RGBA_ASTC_10x8_Format||i===RGBA_ASTC_10x10_Format||i===RGBA_ASTC_12x10_Format||i===RGBA_ASTC_12x12_Format){l=n.get("WEBGL_compressed_texture_astc");if(l!==null){if(i===RGBA_ASTC_4x4_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===RGBA_ASTC_5x4_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===RGBA_ASTC_5x5_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===RGBA_ASTC_6x5_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===RGBA_ASTC_6x6_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===RGBA_ASTC_8x5_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===RGBA_ASTC_8x6_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===RGBA_ASTC_8x8_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===RGBA_ASTC_10x5_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===RGBA_ASTC_10x6_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===RGBA_ASTC_10x8_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===RGBA_ASTC_10x10_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===RGBA_ASTC_12x10_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===RGBA_ASTC_12x12_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(i===RGBA_BPTC_Format||i===RGB_BPTC_SIGNED_Format||i===RGB_BPTC_UNSIGNED_Format){l=n.get("EXT_texture_compression_bptc");if(l!==null){if(i===RGBA_BPTC_Format)return u===SRGBTransfer?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===RGB_BPTC_SIGNED_Format)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===RGB_BPTC_UNSIGNED_Format)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(i===RED_RGTC1_Format||i===SIGNED_RED_RGTC1_Format||i===RED_GREEN_RGTC2_Format||i===SIGNED_RED_GREEN_RGTC2_Format){l=n.get("EXT_texture_compression_rgtc");if(l!==null){if(i===RED_RGTC1_Format)return l.COMPRESSED_RED_RGTC1_EXT;if(i===SIGNED_RED_RGTC1_Format)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===RED_GREEN_RGTC2_Format)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===SIGNED_RED_GREEN_RGTC2_Format)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}if(i===UnsignedInt248Type)return e.UNSIGNED_INT_24_8;return e[i]!==void 0?e[i]:null}return{convert:t}}const Cs=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bs=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fn{constructor(){this.texture=null;this.mesh=null;this.depthNear=0;this.depthFar=0}init(e,n){if(this.texture===null){const t=new ExternalTexture(e.texture);if(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar){this.depthNear=e.depthNear;this.depthFar=e.depthFar}this.texture=t}}getMesh(e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,t=new ShaderMaterial({vertexShader:Cs,fragmentShader:bs,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),t)}}return this.mesh}reset(){this.texture=null;this.mesh=null}getDepthTexture(){return this.texture}}class On extends EventDispatcher{constructor(e,n){super();const t=this;let i=null,d=1,l=null,u="local-floor",m=1,G=null,b=null,W=null,I=null,S=null,T=null;const P=typeof XRWebGLBinding<"u",O=new Fn,c={},s=n.getContextAttributes();let v=null,D=null;const _=[],M=[],w=new Vector2;let o=null,p=null;const U=new PerspectiveCamera;U.viewport=new Vector4;const q=new PerspectiveCamera;q.viewport=new Vector4;const L=[U,q],k=new ArrayCamera;let le=null,x=null;this.cameraAutoUpdate=!0;this.enabled=!1;this.isPresenting=!1;this.getController=function(X){let ne=_[X];if(ne===void 0){ne=new WebXRController;_[X]=ne}return ne.getTargetRaySpace()};this.getControllerGrip=function(X){let ne=_[X];if(ne===void 0){ne=new WebXRController;_[X]=ne}return ne.getGripSpace()};this.getHand=function(X){let ne=_[X];if(ne===void 0){ne=new WebXRController;_[X]=ne}return ne.getHandSpace()};function Y(X){const ne=M.indexOf(X.inputSource);if(ne===-1)return;const Se=_[ne];if(Se!==void 0){Se.update(X.inputSource,X.frame,G||l);Se.dispatchEvent({type:X.type,data:X.inputSource})}}function Q(){i.removeEventListener("select",Y);i.removeEventListener("selectstart",Y);i.removeEventListener("selectend",Y);i.removeEventListener("squeeze",Y);i.removeEventListener("squeezestart",Y);i.removeEventListener("squeezeend",Y);i.removeEventListener("end",Q);i.removeEventListener("inputsourceschange",y);for(let X=0;X<_.length;X++){const ne=M[X];if(ne===null)continue;M[X]=null;_[X].disconnect(ne)}le=null;x=null;O.reset();for(const X in c)delete c[X];e.setRenderTarget(v);S=null;I=null;W=null;i=null;D=null;Ae.stop();t.isPresenting=!1;e.setPixelRatio(o);e.setSize(w.width,w.height,!1);if(p!==null){const X=p.camera;X.fov=p.fov;X.zoom=p.zoom;X.updateProjectionMatrix();p=null}t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){d=X;if(t.isPresenting===!0)warn("WebXRManager: Cannot change framebuffer scale while presenting.")};this.setReferenceSpaceType=function(X){u=X;if(t.isPresenting===!0)warn("WebXRManager: Cannot change reference space type while presenting.")};this.getReferenceSpace=function(){return G||l};this.setReferenceSpace=function(X){G=X};this.getBaseLayer=function(){return I!==null?I:S};this.getBinding=function(){if(W===null&&P)W=new XRWebGLBinding(i,n);return W};this.getFrame=function(){return T};this.getSession=function(){return i};this.setSession=async function(X){i=X;if(i!==null){v=e.getRenderTarget();i.addEventListener("select",Y);i.addEventListener("selectstart",Y);i.addEventListener("selectend",Y);i.addEventListener("squeeze",Y);i.addEventListener("squeezestart",Y);i.addEventListener("squeezeend",Y);i.addEventListener("end",Q);i.addEventListener("inputsourceschange",y);if(s.xrCompatible!==!0)await n.makeXRCompatible();o=e.getPixelRatio();e.getSize(w);if(!(P&&("createProjectionLayer"in XRWebGLBinding.prototype))){const Se={antialias:s.antialias,alpha:!0,depth:s.depth,stencil:s.stencil,framebufferScaleFactor:d};S=new XRWebGLLayer(i,n,Se);i.updateRenderState({baseLayer:S});e.setPixelRatio(1);e.setSize(S.framebufferWidth,S.framebufferHeight,!1);D=new WebGLRenderTarget(S.framebufferWidth,S.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:s.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}else{let Se=null,Ce=null,be=null;if(s.depth){be=s.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24;Se=s.stencil?DepthStencilFormat:DepthFormat;Ce=s.stencil?UnsignedInt248Type:UnsignedIntType}const Me={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:d};W=this.getBinding();I=W.createProjectionLayer(Me);i.updateRenderState({layers:[I]});e.setPixelRatio(1);e.setSize(I.textureWidth,I.textureHeight,!1);D=new WebGLRenderTarget(I.textureWidth,I.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(I.textureWidth,I.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:s.stencil,colorSpace:e.outputColorSpace,samples:s.antialias?4:0,resolveDepthBuffer:I.ignoreDepthValues===!1,resolveStencilBuffer:I.ignoreDepthValues===!1,storeMultisampledDepthBuffer:I.ignoreDepthValues===!1,storeMultisampledStencilBuffer:I.ignoreDepthValues===!1})}D.isXRRenderTarget=!0;this.setFoveation(m);G=null;l=await i.requestReferenceSpace(u);Ae.setContext(i);Ae.start();t.isPresenting=!0;t.dispatchEvent({type:"sessionstart"})}};this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};this.getDepthTexture=function(){return O.getDepthTexture()};function y(X){for(let ne=0;ne<X.removed.length;ne++){const Se=X.removed[ne],Ce=M.indexOf(Se);if(Ce>=0){M[Ce]=null;_[Ce].disconnect(Se)}}for(let ne=0;ne<X.added.length;ne++){const Se=X.added[ne];let Ce=M.indexOf(Se);if(Ce===-1){for(let Me=0;Me<_.length;Me++)if(Me>=M.length){M.push(Se);Ce=Me;break}else if(M[Me]===null){M[Me]=Se;Ce=Me;break}if(Ce===-1)break}const be=_[Ce];if(be)be.connect(Se)}}function ge(X,ne){if(ne===null)X.matrixWorld.copy(X.matrix);else X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix);X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let{near:ne,far:Se}=X;if(O.texture!==null){if(O.depthNear>0)ne=O.depthNear;if(O.depthFar>0)Se=O.depthFar}k.near=q.near=U.near=ne;k.far=q.far=U.far=Se;if(le!==k.near||x!==k.far){i.updateRenderState({depthNear:k.near,depthFar:k.far});le=k.near;x=k.far}k.layers.mask=X.layers.mask|6;U.layers.mask=k.layers.mask&-5;q.layers.mask=k.layers.mask&-3;const Ce=X.parent,be=k.cameras;ge(k,Ce);for(let Me=0;Me<be.length;Me++)ge(be[Me],Ce);k.projectionMatrix.copy(U.projectionMatrix);k.projectionMatrixInverse.copy(U.projectionMatrixInverse);if(p===null&&X.isPerspectiveCamera)p={camera:X,fov:X.fov,zoom:X.zoom};K(X,k,Ce)};function K(X,ne,Se){if(Se===null)X.matrix.copy(ne.matrixWorld);else{X.matrix.copy(Se.matrixWorld);X.matrix.invert();X.matrix.multiply(ne.matrixWorld)}X.matrix.decompose(X.position,X.quaternion,X.scale);X.updateMatrixWorld(!0);X.projectionMatrix.copy(ne.projectionMatrix);X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);if(X.isPerspectiveCamera){X.fov=Kn*2*Math.atan(1/X.projectionMatrix.elements[5]);X.zoom=1}}this.getCamera=function(){return k};this.getFoveation=function(){if(I===null&&S===null)return;return m};this.setFoveation=function(X){m=X;if(I!==null)I.fixedFoveation=X;if(S!==null&&S.fixedFoveation!==void 0)S.fixedFoveation=X};this.hasDepthSensing=function(){return O.texture!==null};this.getDepthSensingMesh=function(){return O.getMesh(k)};this.getCameraTexture=function(X){return c[X]};let J=null;function ce(X,ne){b=ne.getViewerPose(G||l);T=ne;if(b!==null){const Se=b.views;if(S!==null){e.setRenderTargetFramebuffer(D,S.framebuffer);e.setRenderTarget(D)}let Ce=!1;if(Se.length!==k.cameras.length){k.cameras.length=0;Ce=!0}for(let Ie=0;Ie<Se.length;Ie++){const we=Se[Ie];let ke=null;if(S!==null)ke=S.getViewport(we);else{const Ke=W.getViewSubImage(I,we);ke=Ke.viewport;if(Ie===0){e.setRenderTargetTextures(D,Ke.colorTexture,Ke.depthStencilTexture);e.setRenderTarget(D)}}let ye=L[Ie];if(ye===void 0){ye=new PerspectiveCamera;ye.layers.enable(Ie);ye.viewport=new Vector4;L[Ie]=ye}ye.matrix.fromArray(we.transform.matrix);ye.matrix.decompose(ye.position,ye.quaternion,ye.scale);ye.projectionMatrix.fromArray(we.projectionMatrix);ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert();ye.viewport.set(ke.x,ke.y,ke.width,ke.height);if(Ie===0){k.matrix.copy(ye.matrix);k.matrix.decompose(k.position,k.quaternion,k.scale)}if(Ce===!0)k.cameras.push(ye)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&P){W=t.getBinding();const Ie=W.getDepthInformation(Se[0]);if(Ie&&Ie.isValid&&Ie.texture)O.init(Ie,i.renderState)}if(be&&be.includes("camera-access")&&P){e.state.unbindTexture();W=t.getBinding();for(let Ie=0;Ie<Se.length;Ie++){const we=Se[Ie].camera;if(we){let ke=c[we];if(!ke){ke=new ExternalTexture;c[we]=ke}const ye=W.getCameraImage(we);ke.sourceTexture=ye}}}}for(let Se=0;Se<_.length;Se++){const Ce=M[Se],be=_[Se];if(Ce!==null&&be!==void 0)be.update(Ce,ne,G||l)}if(J)J(X,ne);if(ne.detectedPlanes)t.dispatchEvent({type:"planesdetected",data:ne});T=null}const Ae=new Jt;Ae.setAnimationLoop(ce);this.setAnimationLoop=function(X){J=X};this.dispose=function(){}}}const Ps=new Matrix4,Dn=new Matrix3;Dn.set(-1,0,0,0,1,0,0,0,1);function Ls(e,n){function t(c,s){if(c.matrixAutoUpdate===!0)c.updateMatrix();s.value.copy(c.matrix)}function i(c,s){s.color.getRGB(c.fogColor.value,$t(e));if(s.isFog){c.fogNear.value=s.near;c.fogFar.value=s.far}else if(s.isFogExp2)c.fogDensity.value=s.density}function d(c,s,v,D,_){if(s.isNodeMaterial)s.uniformsNeedUpdate=!1;else if(s.isMeshBasicMaterial)l(c,s);else if(s.isMeshLambertMaterial){l(c,s);if(s.envMap)c.envMapIntensity.value=s.envMapIntensity}else if(s.isMeshToonMaterial){l(c,s);I(c,s)}else if(s.isMeshPhongMaterial){l(c,s);W(c,s);if(s.envMap)c.envMapIntensity.value=s.envMapIntensity}else if(s.isMeshStandardMaterial){l(c,s);S(c,s);if(s.isMeshPhysicalMaterial)T(c,s,_)}else if(s.isMeshMatcapMaterial){l(c,s);P(c,s)}else if(s.isMeshDepthMaterial)l(c,s);else if(s.isMeshDistanceMaterial){l(c,s);O(c,s)}else if(s.isMeshNormalMaterial)l(c,s);else if(s.isLineBasicMaterial){u(c,s);if(s.isLineDashedMaterial)m(c,s)}else if(s.isPointsMaterial)G(c,s,v,D);else if(s.isSpriteMaterial)b(c,s);else if(s.isShadowMaterial){c.color.value.copy(s.color);c.opacity.value=s.opacity}else if(s.isShaderMaterial)s.uniformsNeedUpdate=!1}function l(c,s){c.opacity.value=s.opacity;if(s.color)c.diffuse.value.copy(s.color);if(s.emissive)c.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity);if(s.map){c.map.value=s.map;t(s.map,c.mapTransform)}if(s.alphaMap){c.alphaMap.value=s.alphaMap;t(s.alphaMap,c.alphaMapTransform)}if(s.bumpMap){c.bumpMap.value=s.bumpMap;t(s.bumpMap,c.bumpMapTransform);c.bumpScale.value=s.bumpScale;if(s.side===BackSide)c.bumpScale.value*=-1}if(s.normalMap){c.normalMap.value=s.normalMap;t(s.normalMap,c.normalMapTransform);c.normalScale.value.copy(s.normalScale);if(s.side===BackSide)c.normalScale.value.negate()}if(s.displacementMap){c.displacementMap.value=s.displacementMap;t(s.displacementMap,c.displacementMapTransform);c.displacementScale.value=s.displacementScale;c.displacementBias.value=s.displacementBias}if(s.emissiveMap){c.emissiveMap.value=s.emissiveMap;t(s.emissiveMap,c.emissiveMapTransform)}if(s.specularMap){c.specularMap.value=s.specularMap;t(s.specularMap,c.specularMapTransform)}if(s.alphaTest>0)c.alphaTest.value=s.alphaTest;const v=n.get(s),{envMap:D,envMapRotation:_}=v;if(D){c.envMap.value=D;c.envMapRotation.value.setFromMatrix4(Ps.makeRotationFromEuler(_)).transpose();if(D.isCubeTexture&&D.isRenderTargetTexture===!1)c.envMapRotation.value.premultiply(Dn);c.reflectivity.value=s.reflectivity;c.ior.value=s.ior;c.refractionRatio.value=s.refractionRatio}if(s.lightMap){c.lightMap.value=s.lightMap;c.lightMapIntensity.value=s.lightMapIntensity;t(s.lightMap,c.lightMapTransform)}if(s.aoMap){c.aoMap.value=s.aoMap;c.aoMapIntensity.value=s.aoMapIntensity;t(s.aoMap,c.aoMapTransform)}}function u(c,s){c.diffuse.value.copy(s.color);c.opacity.value=s.opacity;if(s.map){c.map.value=s.map;t(s.map,c.mapTransform)}}function m(c,s){c.dashSize.value=s.dashSize;c.totalSize.value=s.dashSize+s.gapSize;c.scale.value=s.scale}function G(c,s,v,D){c.diffuse.value.copy(s.color);c.opacity.value=s.opacity;c.size.value=s.size*v;c.scale.value=D*0.5;if(s.map){c.map.value=s.map;t(s.map,c.uvTransform)}if(s.alphaMap){c.alphaMap.value=s.alphaMap;t(s.alphaMap,c.alphaMapTransform)}if(s.alphaTest>0)c.alphaTest.value=s.alphaTest}function b(c,s){c.diffuse.value.copy(s.color);c.opacity.value=s.opacity;c.rotation.value=s.rotation;if(s.map){c.map.value=s.map;t(s.map,c.mapTransform)}if(s.alphaMap){c.alphaMap.value=s.alphaMap;t(s.alphaMap,c.alphaMapTransform)}if(s.alphaTest>0)c.alphaTest.value=s.alphaTest}function W(c,s){c.specular.value.copy(s.specular);c.shininess.value=Math.max(s.shininess,0.0001)}function I(c,s){if(s.gradientMap)c.gradientMap.value=s.gradientMap}function S(c,s){c.metalness.value=s.metalness;if(s.metalnessMap){c.metalnessMap.value=s.metalnessMap;t(s.metalnessMap,c.metalnessMapTransform)}c.roughness.value=s.roughness;if(s.roughnessMap){c.roughnessMap.value=s.roughnessMap;t(s.roughnessMap,c.roughnessMapTransform)}if(s.envMap)c.envMapIntensity.value=s.envMapIntensity}function T(c,s,v){c.ior.value=s.ior;if(s.diffuseRoughness>0){c.diffuseRoughness.value=s.diffuseRoughness;if(s.diffuseRoughnessMap){c.diffuseRoughnessMap.value=s.diffuseRoughnessMap;t(s.diffuseRoughnessMap,c.diffuseRoughnessMapTransform)}}if(s.sheen>0){c.sheenColor.value.copy(s.sheenColor).multiplyScalar(s.sheen);c.sheenRoughness.value=s.sheenRoughness;if(s.sheenColorMap){c.sheenColorMap.value=s.sheenColorMap;t(s.sheenColorMap,c.sheenColorMapTransform)}if(s.sheenRoughnessMap){c.sheenRoughnessMap.value=s.sheenRoughnessMap;t(s.sheenRoughnessMap,c.sheenRoughnessMapTransform)}}if(s.clearcoat>0){c.clearcoat.value=s.clearcoat;c.clearcoatRoughness.value=s.clearcoatRoughness;if(s.clearcoatMap){c.clearcoatMap.value=s.clearcoatMap;t(s.clearcoatMap,c.clearcoatMapTransform)}if(s.clearcoatRoughnessMap){c.clearcoatRoughnessMap.value=s.clearcoatRoughnessMap;t(s.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)}if(s.clearcoatNormalMap){c.clearcoatNormalMap.value=s.clearcoatNormalMap;t(s.clearcoatNormalMap,c.clearcoatNormalMapTransform);c.clearcoatNormalScale.value.copy(s.clearcoatNormalScale);if(s.side===BackSide)c.clearcoatNormalScale.value.negate()}}if(s.dispersion>0)c.dispersion.value=s.dispersion;if(s.retroreflectivity>0)c.retroreflectivity.value=s.retroreflectivity;if(s.iridescence>0){c.iridescence.value=s.iridescence;c.iridescenceIOR.value=s.iridescenceIOR;c.iridescenceThicknessMinimum.value=s.iridescenceThicknessMinimum;c.iridescenceThicknessMaximum.value=s.iridescenceThicknessMaximum;if(s.iridescenceMap){c.iridescenceMap.value=s.iridescenceMap;t(s.iridescenceMap,c.iridescenceMapTransform)}if(s.iridescenceThicknessMap){c.iridescenceThicknessMap.value=s.iridescenceThicknessMap;t(s.iridescenceThicknessMap,c.iridescenceThicknessMapTransform)}}if(s.transmission>0){c.transmission.value=s.transmission;c.transmissionSamplerMap.value=v.texture;c.transmissionSamplerSize.value.set(v.width,v.height);if(s.transmissionMap){c.transmissionMap.value=s.transmissionMap;t(s.transmissionMap,c.transmissionMapTransform)}c.thickness.value=s.thickness;if(s.thicknessMap){c.thicknessMap.value=s.thicknessMap;t(s.thicknessMap,c.thicknessMapTransform)}c.attenuationDistance.value=s.attenuationDistance;c.attenuationColor.value.copy(s.attenuationColor)}if(s.anisotropy>0){c.anisotropyVector.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation));if(s.anisotropyMap){c.anisotropyMap.value=s.anisotropyMap;t(s.anisotropyMap,c.anisotropyMapTransform)}}c.specularIntensity.value=s.specularIntensity;c.specularColor.value.copy(s.specularColor);if(s.specularColorMap){c.specularColorMap.value=s.specularColorMap;t(s.specularColorMap,c.specularColorMapTransform)}if(s.specularIntensityMap){c.specularIntensityMap.value=s.specularIntensityMap;t(s.specularIntensityMap,c.specularIntensityMapTransform)}}function P(c,s){if(s.matcap)c.matcap.value=s.matcap}function O(c,s){const v=n.get(s).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld);c.nearDistance.value=v.shadow.camera.near;c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:d}}function Ds(e,n,t,i){let d={},l={};function u(v,D){const _=D.program;i.uniformBlockBinding(v,_,d[v.id])}function m(v,D){let _=d[v.id];if(_===void 0){P(v);_=G(v);d[v.id]=_;v.addEventListener("dispose",c)}const M=D.program;i.updateUBOMapping(v,M);const w=n.render.frame;if(l[v.id]!==w){b(v);l[v.id]=w}}function G(v){const D=e.createBuffer(),{__size:_,usage:M}=v;e.bindBuffer(e.UNIFORM_BUFFER,D);e.bufferData(e.UNIFORM_BUFFER,_,M);e.bindBuffer(e.UNIFORM_BUFFER,null);return D}function b(v){const D=d[v.id],{uniforms:_,__cache:M}=v;e.bindBuffer(e.UNIFORM_BUFFER,D);for(let w=0,o=_.length;w<o;w++){const p=_[w];if(Array.isArray(p))for(let U=0,q=p.length;U<q;U++)W(p[U],w,U,M);else W(p,w,0,M)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function W(v,D,_,M){if(S(v,D,_,M)===!0){const{__offset:w,value:o}=v;if(Array.isArray(o)){let p=0;for(let U=0;U<o.length;U++){const q=o[U],L=O(q,!0);I(q,v.__data,p);p+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else I(o,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,v.__data)}}function I(v,D,_){if(typeof v==="number"||typeof v==="boolean")D[_]=v;else if(v.isMatrix3){D[_]=v.elements[0];D[_+1]=v.elements[1];D[_+2]=v.elements[2];D[_+3]=0;D[_+4]=v.elements[3];D[_+5]=v.elements[4];D[_+6]=v.elements[5];D[_+7]=0;D[_+8]=v.elements[6];D[_+9]=v.elements[7];D[_+10]=v.elements[8];D[_+11]=0}else if(ArrayBuffer.isView(v))D.set(v.subarray(0,D.length-_),_);else v.toArray(D,_)}function S(v,D,_,M){const w=v.value,o=D+"_"+_;if(Array.isArray(w)){if(M[o]===void 0)M[o]=[];const p=M[o];let U=!1;for(let q=0;q<w.length;q++)if(T(w[q],p,q)===!0)U=!0;return U}return T(w,M,o)}function T(v,D,_){if(D[_]===void 0){if(typeof v==="number"||typeof v==="boolean")D[_]=v;else if(ArrayBuffer.isView(v))D[_]=v.slice();else D[_]=v.clone();return!0}else{const M=D[_];if(typeof v==="number"||typeof v==="boolean"){if(M!==v){D[_]=v;return!0}}else if(ArrayBuffer.isView(v))return!0;else if(M.equals(v)===!1){M.copy(v);return!0}}return!1}function P(v){const D=v.uniforms;let _=0;const M=16;for(let o=0,p=D.length;o<p;o++){const U=Array.isArray(D[o])?D[o]:[D[o]];for(let q=0,L=U.length;q<L;q++){const k=U[q],le=Array.isArray(k.value)?k.value:[k.value],x=Array.isArray(D[o])||Array.isArray(k.value);let Y=_;for(let y=0,ge=le.length;y<ge;y++){const K=le[y],J=O(K,x),ce=_%M,Ae=ce%J.boundary,X=ce+Ae;_+=Ae;if(X!==0&&M-X<J.storage)_+=M-X;if(y===0)Y=_;_+=J.storage}const Q=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Q((_-Y)/Float32Array.BYTES_PER_ELEMENT);k.__offset=Y}}const w=_%M;if(w>0)_+=M-w;v.__size=_;v.__cache={};return this}function O(v,D){const _={boundary:0,storage:0};if(typeof v==="number"||typeof v==="boolean"){_.boundary=4;_.storage=4}else if(v.isVector2){_.boundary=8;_.storage=8}else if(v.isVector3||v.isColor){_.boundary=16;_.storage=12}else if(v.isVector4){_.boundary=16;_.storage=16}else if(v.isMatrix3){_.boundary=16;_.storage=48}else if(v.isMatrix4){_.boundary=16;_.storage=64}else if(v.isTexture)warn("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(v)){_.boundary=16;_.storage=v.byteLength}else warn("WebGLRenderer: Unsupported uniform value type.",v);if(D===!0){_.boundary=16;_.storage=Math.ceil(_.storage/16)*16}return _}function c(v){const D=v.target;D.removeEventListener("dispose",c);e.deleteBuffer(d[D.id]);delete d[D.id];delete l[D.id]}function s(){for(const v in d)e.deleteBuffer(d[v]);d={};l={}}return{bind:u,update:m,dispose:s}}const ws=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mt=null;function Us(){if(mt===null){mt=new DataTexture(ws,16,16,RGFormat,HalfFloatType);mt.name="DFG_LUT";mt.minFilter=LinearFilter;mt.magFilter=LinearFilter;mt.wrapS=ClampToEdgeWrapping;mt.wrapT=ClampToEdgeWrapping;mt.generateMipmaps=!1;mt.needsUpdate=!0}return mt}class WebGLRenderer{constructor(e={}){const{canvas:n=createCanvasElement(),context:t=null,depth:i=!0,stencil:d=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:G=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:W=!1,reversedDepthBuffer:I=!1,outputBufferType:S=UnsignedByteType}=e;this.isWebGLRenderer=!0;let T;if(t!==null){if(typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=t.getContextAttributes().alpha}else T=l;const P=S,O=new Set([RGBAIntegerFormat,RGIntegerFormat,RedIntegerFormat]),c=new Set([UnsignedByteType,UnsignedIntType,UnsignedShortType,UnsignedInt248Type,UnsignedShort4444Type,UnsignedShort5551Type]),s=new Uint32Array(4),v=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]};let _=null,M=null;const w=[],o=[];let p=null;this.domElement=n;this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null};this.autoClear=!0;this.autoClearColor=!0;this.autoClearDepth=!0;this.autoClearStencil=!0;this.sortObjects=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.toneMapping=NoToneMapping;this.toneMappingExposure=1;this.transmissionResolutionScale=1;const U=this;let q=!1,L=null,k=null,le=null,x=null;this._outputColorSpace=SRGBColorSpace;let Y=0,Q=0,y=null,ge=-1,K=null;const J=new Vector4,ce=new Vector4;let Ae=null;const X=new Color(0);let ne=0,{width:Se,height:Ce}=n,be=1,Me=null,ze=null;const Ie=new Vector4(0,0,Se,Ce),we=new Vector4(0,0,Se,Ce);let ke=!1;const ye=new Frustum,Ke=new FrustumArray;let qe=!1,st=!1;const dt=new Matrix4,Ye=new Vector3,nt=new Vector4,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function ut(){return y===null?be:1}let E=t;function pt(a,g){return n.getContext(a,g)}let Be,Je,fe,Ve,Re,Pe,it,f,r,A,Z,z,te,ae,F,V,ie,h,H,B,j,ee,se;try{const a={alpha:!0,depth:i,stencil:d,antialias:u,premultipliedAlpha:m,preserveDrawingBuffer:G,powerPreference:b,failIfMajorPerformanceCaveat:W};if("setAttribute"in n)n.setAttribute("data-engine",`three.js r${REVISION}`);n.addEventListener("webglcontextlost",de,!1);n.addEventListener("webglcontextrestored",Te,!1);n.addEventListener("webglcontextcreationerror",De,!1);if(E===null){const g="webgl2";E=pt(g,a);if(E===null)if(pt(g))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}xe()}catch(a){n.removeEventListener("webglcontextlost",de,!1);n.removeEventListener("webglcontextrestored",Te,!1);n.removeEventListener("webglcontextcreationerror",De,!1);error("WebGLRenderer: "+a.message);throw a}function xe(){Be=new ka(E);Be.init();j=new WebGLUtils(E,Be);Je=new Ua(E,Be,e,j);fe=new As(E,Be);if(Je.reversedDepthBuffer&&I)fe.buffers.depth.setReversed(!0);k=E.createFramebuffer();le=E.createFramebuffer();x=E.createFramebuffer();Ve=new Ka(E);Re=new fs;Pe=new Rs(E,Be,fe,Re,Je,j,Ve);it=new Wa(U);f=new Yn(E);ee=new Da(E,f);r=new za(E,f,Ve,ee);A=new Ya(E,r,f,ee,Ve);h=new qa(E,Je,Pe);F=new Na(Re);Z=new cs(U,it,Be,Je,ee,F);z=new Ls(U,Re);te=new us;ae=new vs(Be);ie=new La(U,it,fe,A,T,m);V=new Ts(U,A,Je);se=new Ds(E,Ve,Je,fe);H=new wa(E,Be,Ve);B=new Xa(E,Be,Ve);Ve.programs=Z.programs;U.capabilities=Je;U.extensions=Be;U.properties=Re;U.renderLists=te;U.shadowMap=V;U.state=fe;U.info=Ve}if(P!==UnsignedByteType)p=new $a(P,n.width,n.height,u,i,d);const Ee=new On(U,E);this.xr=Ee;this.getContext=function(){return E};this.getContextAttributes=function(){return E.getContextAttributes()};this.forceContextLoss=function(){const a=Be.get("WEBGL_lose_context");if(a)a.loseContext()};this.forceContextRestore=function(){const a=Be.get("WEBGL_lose_context");if(a)a.restoreContext()};this.getPixelRatio=function(){return be};this.setPixelRatio=function(a){if(a===void 0)return;be=a;this.setSize(Se,Ce,!1)};this.getSize=function(a){return a.set(Se,Ce)};this.setSize=function(a,g,N=!0){if(Ee.isPresenting){warn("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=a;Ce=g;n.width=Math.floor(a*be);n.height=Math.floor(g*be);if(N===!0){n.style.width=a+"px";n.style.height=g+"px"}if(p!==null)p.setSize(n.width,n.height);this.setViewport(0,0,a,g)};this.getDrawingBufferSize=function(a){return a.set(Se*be,Ce*be).floor()};this.setDrawingBufferSize=function(a,g,N){Se=a;Ce=g;be=N;n.width=Math.floor(a*N);n.height=Math.floor(g*N);this.setViewport(0,0,a,g)};this.setEffects=function(a){if(P===UnsignedByteType){error("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(a){for(let g=0;g<a.length;g++)if(a[g].isOutputPass===!0){warn("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}p.setEffects(a||[])};this.getCurrentViewport=function(a){return a.copy(J)};this.getViewport=function(a){return a.copy(Ie)};this.setViewport=function(a,g,N,R){if(a.isVector4)Ie.set(a.x,a.y,a.z,a.w);else Ie.set(a,g,N,R);fe.viewport(J.copy(Ie).multiplyScalar(ut()).round())};this.getScissor=function(a){return a.copy(we)};this.setScissor=function(a,g,N,R){if(a.isVector4)we.set(a.x,a.y,a.z,a.w);else we.set(a,g,N,R);fe.scissor(ce.copy(we).multiplyScalar(ut()).round())};this.getScissorTest=function(){return ke};this.setScissorTest=function(a){fe.setScissorTest(ke=a)};this.setOpaqueSort=function(a){Me=a};this.setTransparentSort=function(a){ze=a};this.getClearColor=function(a){return a.copy(ie.getClearColor())};this.setClearColor=function(){ie.setClearColor(...arguments)};this.getClearAlpha=function(){return ie.getClearAlpha()};this.setClearAlpha=function(){ie.setClearAlpha(...arguments)};this.clear=function(a=!0,g=!0,N=!0){let R=0;if(a){let C=!1;if(y!==null){const oe=y.texture.format;C=O.has(oe)}if(C){const oe=y.texture.type,he=c.has(oe),re=ie.getClearColor(),pe=ie.getClearAlpha(),{r:ve,g:Le,b:Ue}=re;if(he){s[0]=ve;s[1]=Le;s[2]=Ue;s[3]=pe;E.clearBufferuiv(E.COLOR,0,s)}else{v[0]=ve;v[1]=Le;v[2]=Ue;v[3]=pe;E.clearBufferiv(E.COLOR,0,v)}}else R|=E.COLOR_BUFFER_BIT}if(g){R|=E.DEPTH_BUFFER_BIT;this.state.buffers.depth.setMask(!0)}if(N){R|=E.STENCIL_BUFFER_BIT;this.state.buffers.stencil.setMask(4294967295)}if(R!==0)E.clear(R)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.setNodesHandler=function(a){a.setRenderer(this);L=a};this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1);n.removeEventListener("webglcontextrestored",Te,!1);n.removeEventListener("webglcontextcreationerror",De,!1);ie.dispose();te.dispose();ae.dispose();Pe.dispose();Re.dispose();it.dispose();A.dispose();r.dispose();ee.dispose();se.dispose();Z.dispose();Ee.dispose();Ee.removeEventListener("sessionstart",Ht);Ee.removeEventListener("sessionend",Vt);St.stop()};function de(a){a.preventDefault();log("WebGLRenderer: Context Lost.");q=!0}function Te(){log("WebGLRenderer: Context Restored.");q=!1;const a=Ve.autoReset,g=V.enabled,N=V.autoUpdate,R=V.needsUpdate,C=V.type;xe();Ve.autoReset=a;V.enabled=g;V.autoUpdate=N;V.needsUpdate=R;V.type=C}function De(a){error("WebGLRenderer: A WebGL context could not be created. Reason: ",a.statusMessage)}function ue(a){const g=a.target;g.removeEventListener("dispose",ue);Ge(g)}function Ge(a){je(a);Re.remove(a)}function je(a){const g=Re.get(a).programs;if(g!==void 0){g.forEach(function(N){Z.releaseProgram(N)});if(a.isShaderMaterial)Z.releaseShaderCache(a)}}this.renderBufferDirect=function(a,g,N,R,C,oe){if(g===null)g=lt;const he=C.isMesh&&C.matrixWorld.determinantAffine()<0,re=Hn(a,g,N,R,C);fe.setMaterial(R,he);let pe=N.index,ve=1;if(R.wireframe===!0){pe=r.getWireframeAttribute(N);if(pe===void 0)return;ve=2}const Le=N.drawRange,Ue=N.attributes.position;let me=Le.start*ve,Ne=(Le.start+Le.count)*ve;if(oe!==null){me=Math.max(me,oe.start*ve);Ne=Math.min(Ne,(oe.start+oe.count)*ve)}if(pe!==null){me=Math.max(me,0);Ne=Math.min(Ne,pe.count)}else if(Ue!==void 0&&Ue!==null){me=Math.max(me,0);Ne=Math.min(Ne,Ue.count)}const Ze=Ne-me;if(Ze<0||Ze===1/0)return;ee.setup(C,R,re,N,pe);let We,He=H;if(pe!==null){We=f.get(pe);He=B;He.setIndex(We)}if(C.isMesh)if(R.wireframe===!0){fe.setLineWidth(R.wireframeLinewidth*ut());He.setMode(E.LINES)}else He.setMode(E.TRIANGLES);else if(C.isLine){let rt=R.linewidth;if(rt===void 0)rt=1;fe.setLineWidth(rt*ut());if(C.isLineSegments)He.setMode(E.LINES);else if(C.isLineLoop)He.setMode(E.LINE_LOOP);else He.setMode(E.LINE_STRIP)}else if(C.isPoints)He.setMode(E.POINTS);else if(C.isSprite)He.setMode(E.TRIANGLES);if(C.isBatchedMesh)if(!Be.get("WEBGL_multi_draw")){const{_multiDrawStarts:rt,_multiDrawCounts:_e,_multiDrawCount:ot}=C,Oe=pe?f.get(pe).bytesPerElement:1,Et=Re.get(R).currentProgram.getUniforms();for(let at=0;at<ot;at++){Et.setValue(E,"_gl_DrawID",at);He.render(rt[at]/Oe,_e[at])}}else He.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else if(C.isInstancedMesh)He.renderInstances(me,Ze,C.count);else if(N.isInstancedBufferGeometry){const rt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,_e=Math.min(N.instanceCount,rt);He.renderInstances(me,Ze,_e)}else He.render(me,Ze)};function _t(a,g,N,R){if(L!==null&&a.isNodeMaterial)L.setObject(R,a);if(qe===!0)F.setState(a,N,!1);if(a.transparent===!0&&a.side===DoubleSide&&a.forceSinglePass===!1){a.side=BackSide;a.needsUpdate=!0;Tt(a,g,R);a.side=FrontSide;a.needsUpdate=!0;Tt(a,g,R);a.side=DoubleSide}else Tt(a,g,R)}this.compile=function(a,g,N=null){if(N===null)N=a;if(L!==null)L.renderStart(a,g,N);M=ae.get(N);M.init(g);o.push(M);N.traverseVisible(function(C){if(C.isLight&&C.layers.test(g.layers)){M.pushLight(C);if(C.castShadow)M.pushShadow(C)}});if(a!==N)a.traverseVisible(function(C){if(C.isLight&&C.layers.test(g.layers)){M.pushLight(C);if(C.castShadow)M.pushShadow(C)}});M.setupLights();if(L!==null)L.updateLights(M.state.lightsArray);st=this.localClippingEnabled;qe=F.init(this.clippingPlanes,st);if(qe===!0)F.setGlobalState(this.clippingPlanes,g);if(L!==null)V.render(M.state.shadowsArray,N,g);const R=new Set;a.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const oe=C.material;if(oe)if(Array.isArray(oe))for(let he=0;he<oe.length;he++){const re=oe[he];_t(re,N,g,C);R.add(re)}else{_t(oe,N,g,C);R.add(oe)}});M=o.pop();if(L!==null)L.renderEnd();return R};this.compileAsync=function(a,g,N=null){const R=this.compile(a,g,N);return new Promise((C)=>{function oe(){R.forEach(function(he){const pe=Re.get(he).currentProgram;if(pe===void 0||pe.isReady())R.delete(he)});if(R.size===0){C(a);return}setTimeout(oe,10)}if(Be.get("KHR_parallel_shader_compile")!==null)oe();else setTimeout(oe,10)})};let It=null;function Bn(a){if(It)It(a)}function Ht(){St.stop()}function Vt(){St.start()}const St=new Jt;St.setAnimationLoop(Bn);if(typeof self<"u")St.setContext(self);this.setAnimationLoop=function(a){It=a;Ee.setAnimationLoop(a);a===null?St.stop():St.start()};Ee.addEventListener("sessionstart",Ht);Ee.addEventListener("sessionend",Vt);this.render=function(a,g){if(g!==void 0&&g.isCamera!==!0){error("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(L!==null)L.renderStart(a,g);const N=Ee.enabled===!0&&Ee.isPresenting===!0,R=p!==null&&(y===null||N)&&p.begin(U,y);if(a.matrixWorldAutoUpdate===!0)a.updateMatrixWorld();if(g.parent===null&&g.matrixWorldAutoUpdate===!0)g.updateMatrixWorld();if(Ee.enabled===!0&&Ee.isPresenting===!0&&(p===null||p.isCompositing()===!1)){if(Ee.cameraAutoUpdate===!0)Ee.updateCamera(g);g=Ee.getCamera()}if(a.isScene===!0)a.onBeforeRender(U,a,g,y);M=ae.get(a,o.length);M.init(g);M.state.textureUnits=Pe.getTextureUnits();o.push(M);dt.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse);if(g.isArrayCamera)Ke.setFromArrayCamera(g);else ye.setFromProjectionMatrix(dt,WebGLCoordinateSystem,g.reversedDepth);st=this.localClippingEnabled;qe=F.init(this.clippingPlanes,st);_=te.get(a,w.length);_.init();w.push(_);this.info.render.frame++;if(Ee.enabled===!0&&Ee.isPresenting===!0){const he=U.xr.getDepthSensingMesh();if(he!==null)yt(he,g,-1/0,U.sortObjects)}yt(a,g,0,U.sortObjects);_.finish();if(L!==null)L.updateLights(M.state.lightsArray);if(U.sortObjects===!0)_.sort(Me,ze);ct=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1;if(ct)ie.addToRenderList(_,a);if(this.info.autoReset===!0)this.info.reset();if(qe===!0)F.beginShadows();const C=M.state.shadowsArray;V.render(C,a,g);if(qe===!0)F.endShadows();if((R&&p.hasRenderPass())===!1){const he=_.opaque,re=_.transmissive;M.setupLights();if(g.isArrayCamera){const pe=g.cameras;if(re.length>0)for(let ve=0,Le=pe.length;ve<Le;ve++){const Ue=pe[ve];kt(he,re,a,Ue)}if(ct)ie.render(a);for(let ve=0,Le=pe.length;ve<Le;ve++){const Ue=pe[ve];Wt(_,a,Ue,Ue.viewport)}}else{if(re.length>0)kt(he,re,a,g);if(ct)ie.render(a);Wt(_,a,g)}}if(y!==null&&Q===0){Pe.updateMultisampleRenderTarget(y);Pe.updateRenderTargetMipmap(y)}if(R)p.end(U);if(a.isScene===!0)a.onAfterRender(U,a,g);ee.resetDefaultState();ge=-1;K=null;o.pop();if(o.length>0){M=o[o.length-1];Pe.setTextureUnits(M.state.textureUnits);if(qe===!0)F.setGlobalState(U.clippingPlanes,M.state.camera)}else M=null;w.pop();if(w.length>0)_=w[w.length-1];else _=null;if(L!==null)L.renderEnd()};function yt(a,g,N,R){if(a.visible===!1)return;if(a.layers.test(g.layers)){if(a.isGroup)N=a.renderOrder;else if(a.isLOD){if(a.autoUpdate===!0)a.update(g)}else if(a.isLight){M.pushLight(a);if(a.castShadow)M.pushShadow(a)}else if(a.isSprite){const he=g.isArrayCamera?Ke:ye;if(!a.frustumCulled||a.intersectsFrustum(he)){if(R)nt.setFromMatrixPosition(a.matrixWorld).applyMatrix4(dt);const re=A.update(a),pe=a.material;if(pe.visible)_.push(a,re,pe,N,nt.z,null,g)}}else if(a.isMesh||a.isLine||a.isPoints){const he=g.isArrayCamera?Ke:ye;if(!a.frustumCulled||a.intersectsFrustum(he)){const re=A.update(a),pe=a.material;if(R){if(a.boundingSphere!==void 0){if(a.boundingSphere===null)a.computeBoundingSphere();nt.copy(a.boundingSphere.center)}else{if(re.boundingSphere===null)re.computeBoundingSphere();nt.copy(re.boundingSphere.center)}nt.applyMatrix4(a.matrixWorld).applyMatrix4(dt)}if(Array.isArray(pe)){const ve=re.groups;for(let Le=0,Ue=ve.length;Le<Ue;Le++){const me=ve[Le],Ne=pe[me.materialIndex];if(Ne&&Ne.visible)_.push(a,re,Ne,N,nt.z,me,g)}}else if(pe.visible)_.push(a,re,pe,N,nt.z,null,g)}}}const oe=a.children;for(let he=0,re=oe.length;he<re;he++)yt(oe[he],g,N,R)}function Wt(a,g,N,R){const{opaque:C,transmissive:oe,transparent:he}=a;M.setupLightsView(N);if(qe===!0)F.setGlobalState(U.clippingPlanes,N);if(R)fe.viewport(J.copy(R));if(C.length>0)Pt(C,g,N);if(oe.length>0)Pt(oe,g,N);if(he.length>0)Pt(he,g,N);fe.buffers.depth.setTest(!0);fe.buffers.depth.setMask(!0);fe.buffers.color.setMask(!0);fe.setPolygonOffset(!1)}function kt(a,g,N,R){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[R.id]===void 0){const me=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[R.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:me?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:Math.max(4,Je.samples),stencilBuffer:d,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace})}const oe=M.state.transmissionRenderTarget[R.id],he=R.viewport||J;oe.setSize(he.z*U.transmissionResolutionScale,he.w*U.transmissionResolutionScale);const re=U.getRenderTarget(),pe=U.getActiveCubeFace(),ve=U.getActiveMipmapLevel();U.setRenderTarget(oe);U.getClearColor(X);ne=U.getClearAlpha();if(ne<1)U.setClearColor(16777215,0.5);U.clear();if(ct)ie.render(N);const Le=U.toneMapping;U.toneMapping=NoToneMapping;const Ue=R.viewport;if(R.viewport!==void 0)R.viewport=void 0;M.setupLightsView(R);if(qe===!0)F.setGlobalState(U.clippingPlanes,R);Pt(a,N,R);Pe.updateMultisampleRenderTarget(oe);Pe.updateRenderTargetMipmap(oe);if(Be.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Ne=0,Ze=g.length;Ne<Ze;Ne++){const We=g[Ne],{object:He,geometry:rt,material:_e,group:ot}=We;if(_e.side===DoubleSide&&He.layers.test(R.layers)){const Oe=_e.side;_e.side=BackSide;_e.needsUpdate=!0;zt(He,N,R,rt,_e,ot);_e.side=Oe;_e.needsUpdate=!0;me=!0}}if(me===!0){Pe.updateMultisampleRenderTarget(oe);Pe.updateRenderTargetMipmap(oe)}}U.setRenderTarget(re,pe,ve);U.setClearColor(X,ne);if(Ue!==void 0)R.viewport=Ue;U.toneMapping=Le}function Pt(a,g,N){const R=g.isScene===!0?g.overrideMaterial:null;for(let C=0,oe=a.length;C<oe;C++){const he=a[C],{object:re,geometry:pe,group:ve}=he;let Le=he.material;if(Le.allowOverride===!0&&R!==null)Le=R;if(re.layers.test(N.layers))zt(re,g,N,pe,Le,ve)}}function zt(a,g,N,R,C,oe){if(L!==null&&C.isNodeMaterial)L.setObject(a,C);a.onBeforeRender(U,g,N,R,C,oe);a.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);C.onBeforeRender(U,g,N,R,a,oe);if(C.transparent===!0&&C.side===DoubleSide&&C.forceSinglePass===!1){C.side=BackSide;C.needsUpdate=!0;U.renderBufferDirect(N,g,R,C,a,oe);C.side=FrontSide;C.needsUpdate=!0;U.renderBufferDirect(N,g,R,C,a,oe);C.side=DoubleSide}else U.renderBufferDirect(N,g,R,C,a,oe);a.onAfterRender(U,g,N,R,C,oe)}function Xt(a){let g=0;for(const N of a)if(N.texture!==null)g++;return g}function Tt(a,g,N){if(g.isScene!==!0)g=lt;const R=Re.get(a),C=M.state.lights,oe=M.state.shadowsArray,he=C.state.version,re=Z.getParameters(a,C.state,oe,g,N,M.state.lightProbeGridArray),pe=Z.getProgramCacheKey(re);let ve=R.programs;R.environment=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?g.environment:null;R.fog=g.fog;const Le=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap;R.envMap=it.get(a.envMap||R.environment,Le);R.envMapRotation=R.environment!==null&&a.envMap===null?g.environmentRotation:a.envMapRotation;if(ve===void 0){a.addEventListener("dispose",ue);ve=new Map;R.programs=ve;R.programVariants=new Map}let Ue=ve.get(pe);if(Ue!==void 0){if(R.currentProgram===Ue&&R.lightsStateVersion===he){qt(a,re);return Ue}}else{re.uniforms=Z.getUniforms(a);if(L!==null&&a.isNodeMaterial)L.build(a,N,re);a.onBeforeCompile(re,U);Ue=Z.acquireProgram(re,pe);ve.set(pe,Ue);R.uniforms=re.uniforms}const me=R.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||a.clipping===!0)me.clippingPlanes=F.uniform;qt(a,re);R.needsLights=Wn(a);R.lightsStateVersion=he;if(R.needsLights){me.ambientLightColor.value=C.state.ambient;me.lightProbe.value=C.state.probe;me.sunLights.value=C.state.sun;me.sunLightShadows.value=C.state.sunShadow;me.directionalLights.value=C.state.directional;me.directionalLightShadows.value=C.state.directionalShadow;me.spotLights.value=C.state.spot;me.spotLightShadows.value=C.state.spotShadow;me.rectAreaLights.value=C.state.rectArea;me.ltc_1.value=C.state.rectAreaLTC1;me.ltc_2.value=C.state.rectAreaLTC2;me.pointLights.value=C.state.point;me.pointLightShadows.value=C.state.pointShadow;me.hemisphereLights.value=C.state.hemi;me.sunShadowMatrix.value=C.state.sunShadowMatrix;me.sunShadowCascade.value=C.state.sunShadowCascade;me.directionalShadowMatrix.value=C.state.directionalShadowMatrix;me.spotLightMatrix.value=C.state.spotLightMatrix;me.spotLightMap.value=C.state.spotLightMap;me.pointShadowMatrix.value=C.state.pointShadowMatrix}R.numLightProbeGrids=Xt(M.state.lightProbeGridArray);R.currentProgram=Ue;R.uniformsList=null;return Ue}function Gn(a,g,N,R,C){const oe=Re.get(a),he=oe.currentProgram.id+","+R+","+C;let re=oe.programVariants.get(he);if(re===void 0){re=Tt(a,g,N);oe.programVariants.set(he,re)}else{oe.currentProgram=re;oe.uniformsList=null;oe.outputColorSpace=R;oe.toneMapping=C}return re}function Kt(a){if(a.uniformsList===null){const g=a.currentProgram.getUniforms();a.uniformsList=bt.seqWithValue(g.seq,a.uniforms)}return a.uniformsList}function qt(a,g){const N=Re.get(a);N.outputColorSpace=g.outputColorSpace;N.batching=g.batching;N.batchingColor=g.batchingColor;N.instancing=g.instancing;N.instancingColor=g.instancingColor;N.instancingMorph=g.instancingMorph;N.skinning=g.skinning;N.morphTargets=g.morphTargets;N.morphNormals=g.morphNormals;N.morphColors=g.morphColors;N.morphTargetsCount=g.morphTargetsCount;N.numClippingPlanes=g.numClippingPlanes;N.numIntersection=g.numClipIntersection;N.vertexAlphas=g.vertexAlphas;N.vertexTangents=g.vertexTangents;N.toneMapping=g.toneMapping}function Hn(a,g,N,R,C){if(g.isScene!==!0)g=lt;Pe.resetTextureUnits();const oe=g.fog,he=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?g.environment:null,re=y===null?U.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:ColorManagement.workingColorSpace,pe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,ve=it.get(R.envMap||he,pe),Le=R.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ue=!!N.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),me=!!N.morphAttributes.position,Ne=!!N.morphAttributes.normal,Ze=!!N.morphAttributes.color;let We=NoToneMapping;if(R.toneMapped){if(y===null||y.isXRRenderTarget===!0)We=U.toneMapping}const He=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=He!==void 0?He.length:0,_e=Re.get(R),ot=M.state.lights;if(qe===!0){if(st===!0||a!==K){const Xe=a===K&&R.id===ge;F.setState(R,a,Xe)}}let Oe=!1,Et=!1;if(R.version===_e.__version){if(_e.needsLights&&_e.lightsStateVersion!==ot.state.version)Oe=!0;else if(C.isBatchedMesh&&_e.batching===!1)Oe=!0;else if(!C.isBatchedMesh&&_e.batching===!0)Oe=!0;else if(C.isBatchedMesh&&_e.batchingColor===!0&&C._colorsTexture===null)Oe=!0;else if(C.isBatchedMesh&&_e.batchingColor===!1&&C._colorsTexture!==null)Oe=!0;else if(C.isInstancedMesh&&_e.instancing===!1)Oe=!0;else if(!C.isInstancedMesh&&_e.instancing===!0)Oe=!0;else if(C.isSkinnedMesh&&_e.skinning===!1)Oe=!0;else if(!C.isSkinnedMesh&&_e.skinning===!0)Oe=!0;else if(C.isInstancedMesh&&_e.instancingColor===!0&&C.instanceColor===null)Oe=!0;else if(C.isInstancedMesh&&_e.instancingColor===!1&&C.instanceColor!==null)Oe=!0;else if(C.isInstancedMesh&&_e.instancingMorph===!0&&C.morphTexture===null)Oe=!0;else if(C.isInstancedMesh&&_e.instancingMorph===!1&&C.morphTexture!==null)Oe=!0;else if(_e.envMap!==ve)Oe=!0;else if(R.fog===!0&&_e.fog!==oe)Oe=!0;else if(_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==F.numPlanes||_e.numIntersection!==F.numIntersection))Oe=!0;else if(_e.vertexAlphas!==Le)Oe=!0;else if(_e.vertexTangents!==Ue)Oe=!0;else if(_e.morphTargets!==me)Oe=!0;else if(_e.morphNormals!==Ne)Oe=!0;else if(_e.morphColors!==Ze)Oe=!0;else if(_e.morphTargetsCount!==rt)Oe=!0;else if(_e.numLightProbeGrids!==Xt(M.state.lightProbeGridArray))Oe=!0;else if(_e.outputColorSpace!==re||_e.toneMapping!==We)Et=!0}else{Oe=!0;_e.__version=R.version}let at=_e.currentProgram;if(Oe===!0||Et===!0){at=Et===!0?Gn(R,g,C,re,We):Tt(R,g,C);if(L&&R.isNodeMaterial)L.onUpdateProgram(R,at,_e)}let Lt=!1,vt=!1,Mt=!1;const Fe=at.getUniforms(),tt=_e.uniforms;if(fe.useProgram(at.program)){Lt=!0;vt=!0;Mt=!0}if(R.id!==ge){ge=R.id;vt=!0}if(Lt||K!==a){if(fe.buffers.depth.getReversed()&&a.reversedDepth!==!0){a._reversedDepth=!0;a.updateProjectionMatrix()}Fe.setValue(E,"projectionMatrix",a.projectionMatrix);Fe.setValue(E,"viewMatrix",a.matrixWorldInverse);const et=Fe.map.cameraPosition;if(et!==void 0)et.setValue(E,Ye.setFromMatrixPosition(a.matrixWorld));if(Je.logarithmicDepthBuffer)Fe.setValue(E,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));if(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)Fe.setValue(E,"isOrthographic",a.isOrthographicCamera===!0);if(K!==a){K=a;vt=!0;Mt=!0}}if(_e.needsLights){if(ot.state.sunShadowMap.length>0)Fe.setValue(E,"sunShadowMap",ot.state.sunShadowMap,Pe);if(ot.state.directionalShadowMap.length>0)Fe.setValue(E,"directionalShadowMap",ot.state.directionalShadowMap,Pe);if(ot.state.spotShadowMap.length>0)Fe.setValue(E,"spotShadowMap",ot.state.spotShadowMap,Pe);if(ot.state.pointShadowMap.length>0)Fe.setValue(E,"pointShadowMap",ot.state.pointShadowMap,Pe)}if(C.isSkinnedMesh){Fe.setOptional(E,C,"bindMatrix");Fe.setOptional(E,C,"bindMatrixInverse");const Xe=C.skeleton;if(Xe){if(Xe.boneTexture===null)Xe.computeBoneTexture();Fe.setValue(E,"boneTexture",Xe.boneTexture,Pe)}}if(C.isBatchedMesh){Fe.setOptional(E,C,"batchingTexture");Fe.setValue(E,"batchingTexture",C._matricesTexture,Pe);Fe.setOptional(E,C,"batchingIdTexture");Fe.setValue(E,"batchingIdTexture",C._indirectTexture,Pe);Fe.setOptional(E,C,"batchingColorTexture");if(C._colorsTexture!==null)Fe.setValue(E,"batchingColorTexture",C._colorsTexture,Pe)}const ht=N.morphAttributes;if(ht.position!==void 0||ht.normal!==void 0||ht.color!==void 0)h.update(C,N,at);if(vt||_e.receiveShadow!==C.receiveShadow){_e.receiveShadow=C.receiveShadow;Fe.setValue(E,"receiveShadow",C.receiveShadow)}if((R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial)&&R.envMap===null&&g.environment!==null)tt.envMapIntensity.value=g.environmentIntensity;if(tt.dfgLUT!==void 0)tt.dfgLUT.value=Us();if(vt){Fe.setValue(E,"toneMappingExposure",U.toneMappingExposure);if(_e.needsLights)Vn(tt,Mt);if(oe&&R.fog===!0)z.refreshFogUniforms(tt,oe);z.refreshMaterialUniforms(tt,R,be,Ce,M.state.transmissionRenderTarget[a.id]);if(_e.needsLights&&_e.numLightProbeGrids>0){const Xe=D;let et=0;for(const gt of M.state.lightProbeGridArray){if(gt.texture===null)continue;Xe.textures[et]=gt.texture;Xe.min[et]=gt.boundingBox.min;Xe.max[et]=gt.boundingBox.max;Xe.resolution[et]=gt.resolution;et++}for(const gt in Xe)Xe[gt].length=et;tt.probesSH.value=Xe.textures;tt.probesMin.value=Xe.min;tt.probesMax.value=Xe.max;tt.probesResolution.value=Xe.resolution}bt.upload(E,Kt(_e),tt,Pe)}if(R.isShaderMaterial&&R.uniformsNeedUpdate===!0){bt.upload(E,Kt(_e),tt,Pe);R.uniformsNeedUpdate=!1}if(R.isSpriteMaterial)Fe.setValue(E,"center",C.center);Fe.setValue(E,"modelViewMatrix",C.modelViewMatrix);Fe.setValue(E,"normalMatrix",C.normalMatrix);Fe.setValue(E,"modelMatrix",C.matrixWorld);if(R.uniformsGroups!==void 0){const Xe=R.uniformsGroups;for(let et=0,gt=Xe.length;et<gt;et++){const Zt=Xe[et];se.update(Zt,at);se.bind(Zt,at)}}return at}function Vn(a,g){a.ambientLightColor.needsUpdate=g;a.lightProbe.needsUpdate=g;a.sunLights.needsUpdate=g;a.sunLightShadows.needsUpdate=g;a.directionalLights.needsUpdate=g;a.directionalLightShadows.needsUpdate=g;a.pointLights.needsUpdate=g;a.pointLightShadows.needsUpdate=g;a.spotLights.needsUpdate=g;a.spotLightShadows.needsUpdate=g;a.rectAreaLights.needsUpdate=g;a.hemisphereLights.needsUpdate=g}function Wn(a){return a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isShadowMaterial||a.isShaderMaterial&&a.lights===!0}this.getActiveCubeFace=function(){return Y};this.getActiveMipmapLevel=function(){return Q};this.getRenderTarget=function(){return y};this.setRenderTargetTextures=function(a,g,N){const R=Re.get(a);R.__autoAllocateDepthBuffer=a.resolveDepthBuffer===!1;if(R.__autoAllocateDepthBuffer===!1)R.__useRenderToTexture=!1;Re.get(a.texture).__webglTexture=g;Re.get(a.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:N;R.__hasExternalTextures=!0};this.setRenderTargetFramebuffer=function(a,g){const N=Re.get(a);N.__webglFramebuffer=g;N.__useDefaultFramebuffer=g===void 0};this.setRenderTarget=function(a,g=0,N=0){y=a;Y=g;Q=N;let R=null,C=!1,oe=!1;if(a){const re=Re.get(a);if(re.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(E.FRAMEBUFFER,re.__webglFramebuffer);J.copy(a.viewport);ce.copy(a.scissor);Ae=a.scissorTest;fe.viewport(J);fe.scissor(ce);fe.setScissorTest(Ae);ge=-1;return}else if(re.__webglFramebuffer===void 0)Pe.setupRenderTarget(a);else if(re.__hasExternalTextures)Pe.rebindTextures(a,Re.get(a.texture).__webglTexture,Re.get(a.depthTexture).__webglTexture);else if(a.depthBuffer){const Le=a.depthTexture;if(re.__boundDepthTexture!==Le){if(Le!==null&&Re.has(Le)&&(a.width!==Le.image.width||a.height!==Le.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(a)}}const pe=a.texture;if(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)oe=!0;const ve=Re.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget){if(Array.isArray(ve[g]))R=ve[g][N];else R=ve[g];C=!0}else if(a.samples>0&&Pe.useMultisampledRTT(a)===!1)R=Re.get(a).__webglMultisampledFramebuffer;else if(Array.isArray(ve))R=ve[N];else R=ve;J.copy(a.viewport);ce.copy(a.scissor);Ae=a.scissorTest}else{J.copy(Ie).multiplyScalar(be).floor();ce.copy(we).multiplyScalar(be).floor();Ae=ke}if(N!==0)R=k;if(fe.bindFramebuffer(E.FRAMEBUFFER,R))fe.drawBuffers(a,R);fe.viewport(J);fe.scissor(ce);fe.setScissorTest(Ae);if(C){const re=Re.get(a.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+g,re.__webglTexture,N)}else if(oe){const re=g;for(let pe=0;pe<a.textures.length;pe++){const ve=Re.get(a.textures[pe]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+pe,ve.__webglTexture,N,re)}}else if(a!==null&&N!==0){const re=Re.get(a.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,re.__webglTexture,N)}ge=-1};function Yt(a){const g=Re.get(a);if(g.__readFormat!==a.format||g.__readType!==a.type){g.__readFormat=a.format;g.__readType=a.type;g.__formatReadable=Je.textureFormatReadable(a.format);g.__typeReadable=Je.textureTypeReadable(a.type)}return g}this.readRenderTargetPixels=function(a,g,N,R,C,oe,he,re=0){if(!(a&&a.isWebGLRenderTarget)){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Re.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&he!==void 0){pe=pe[he];if(Array.isArray(pe))pe=pe[0]}if(pe){fe.bindFramebuffer(E.FRAMEBUFFER,pe);try{const ve=a.textures[re],{format:Le,type:Ue}=ve;if(a.textures.length>1)E.readBuffer(E.COLOR_ATTACHMENT0+re);const me=Yt(ve);if(me.__formatReadable===!1){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(me.__typeReadable===!1){error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(g>=0&&g<=a.width-R&&(N>=0&&N<=a.height-C))E.readPixels(g,N,R,C,j.convert(Le),j.convert(Ue),oe)}finally{const ve=y!==null?Re.get(y).__webglFramebuffer:null;fe.bindFramebuffer(E.FRAMEBUFFER,ve)}}};this.readRenderTargetPixelsAsync=async function(a,g,N,R,C,oe,he,re=0){if(!(a&&a.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Re.get(a).__webglFramebuffer;if(a.isWebGLCubeRenderTarget&&he!==void 0){pe=pe[he];if(Array.isArray(pe))pe=pe[0]}if(pe)if(g>=0&&g<=a.width-R&&(N>=0&&N<=a.height-C)){fe.bindFramebuffer(E.FRAMEBUFFER,pe);const ve=a.textures[re],{format:Le,type:Ue}=ve;if(a.textures.length>1)E.readBuffer(E.COLOR_ATTACHMENT0+re);const me=Yt(ve);if(me.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(me.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ne);E.bufferData(E.PIXEL_PACK_BUFFER,oe.byteLength,E.STREAM_READ);E.readPixels(g,N,R,C,j.convert(Le),j.convert(Ue),0);E.bindBuffer(E.PIXEL_PACK_BUFFER,null);const Ze=y!==null?Re.get(y).__webglFramebuffer:null;fe.bindFramebuffer(E.FRAMEBUFFER,Ze);const We=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);E.flush();await qn(E,We,4);E.bindBuffer(E.PIXEL_PACK_BUFFER,Ne);E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,oe);E.bindBuffer(E.PIXEL_PACK_BUFFER,null);E.deleteBuffer(Ne);E.deleteSync(We);return oe}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")};this.copyFramebufferToTexture=function(a,g=null,N=0){const R=Math.pow(2,-N),C=Math.floor(a.image.width*R),oe=Math.floor(a.image.height*R),he=g!==null?g.x:0,re=g!==null?g.y:0;Pe.setTexture2D(a,0);E.copyTexSubImage2D(E.TEXTURE_2D,N,0,0,he,re,C,oe);fe.unbindTexture()};this.copyTextureToTexture=function(a,g,N=null,R=null,C=0,oe=0){let he,re,pe,ve,Le,Ue,me,Ne,Ze;const We=a.isCompressedTexture?a.mipmaps[oe]:a.image;if(N!==null){he=N.max.x-N.min.x;re=N.max.y-N.min.y;pe=N.isBox3?N.max.z-N.min.z:1;ve=N.min.x;Le=N.min.y;Ue=N.isBox3?N.min.z:0}else{const Fe=Math.pow(2,-C);he=Math.floor(We.width*Fe);re=Math.floor(We.height*Fe);if(a.isDataArrayTexture)pe=We.depth;else if(a.isData3DTexture)pe=Math.floor(We.depth*Fe);else pe=1;ve=0;Le=0;Ue=0}if(R!==null){me=R.x;Ne=R.y;Ze=R.z}else{me=0;Ne=0;Ze=0}const He=j.convert(g.format),rt=j.convert(g.type);let _e;if(g.isData3DTexture){Pe.setTexture3D(g,0);_e=E.TEXTURE_3D}else if(g.isDataArrayTexture||g.isCompressedArrayTexture){Pe.setTexture2DArray(g,0);_e=E.TEXTURE_2D_ARRAY}else{Pe.setTexture2D(g,0);_e=E.TEXTURE_2D}fe.activeTexture(E.TEXTURE0);fe.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,g.flipY);fe.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha);fe.pixelStorei(E.UNPACK_ALIGNMENT,g.unpackAlignment);const ot=fe.getParameter(E.UNPACK_ROW_LENGTH),Oe=fe.getParameter(E.UNPACK_IMAGE_HEIGHT),Et=fe.getParameter(E.UNPACK_SKIP_PIXELS),at=fe.getParameter(E.UNPACK_SKIP_ROWS),Lt=fe.getParameter(E.UNPACK_SKIP_IMAGES);fe.pixelStorei(E.UNPACK_ROW_LENGTH,We.width);fe.pixelStorei(E.UNPACK_IMAGE_HEIGHT,We.height);fe.pixelStorei(E.UNPACK_SKIP_PIXELS,ve);fe.pixelStorei(E.UNPACK_SKIP_ROWS,Le);fe.pixelStorei(E.UNPACK_SKIP_IMAGES,Ue);const vt=a.isDataArrayTexture||a.isData3DTexture,Mt=g.isDataArrayTexture||g.isData3DTexture;if(a.isDepthTexture){const Fe=Re.get(a),tt=Re.get(g),ht=Re.get(Fe.__renderTarget),Xe=Re.get(tt.__renderTarget);fe.bindFramebuffer(E.READ_FRAMEBUFFER,ht.__webglFramebuffer);fe.bindFramebuffer(E.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let et=0;et<pe;et++){if(vt){E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Re.get(a).__webglTexture,C,Ue+et);E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Re.get(g).__webglTexture,oe,Ze+et)}E.blitFramebuffer(ve,Le,ve+he,Le+re,me,Ne,me+he,Ne+re,E.DEPTH_BUFFER_BIT,E.NEAREST)}fe.bindFramebuffer(E.READ_FRAMEBUFFER,null);fe.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(C!==0||a.isRenderTargetTexture||Re.has(a)){const Fe=Re.get(a),tt=Re.get(g);fe.bindFramebuffer(E.READ_FRAMEBUFFER,le);fe.bindFramebuffer(E.DRAW_FRAMEBUFFER,x);for(let ht=0;ht<pe;ht++){if(vt)E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Fe.__webglTexture,C,Ue+ht);else E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Fe.__webglTexture,C);if(Mt)E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,tt.__webglTexture,oe,Ze+ht);else E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,tt.__webglTexture,oe);if(C!==0)E.blitFramebuffer(ve,Le,ve+he,Le+re,me,Ne,me+he,Ne+re,E.COLOR_BUFFER_BIT,E.NEAREST);else if(Mt)E.copyTexSubImage3D(_e,oe,me,Ne,Ze+ht,ve,Le,he,re);else E.copyTexSubImage2D(_e,oe,me,Ne,ve,Le,he,re)}fe.bindFramebuffer(E.READ_FRAMEBUFFER,null);fe.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(Mt)if(a.isDataTexture||a.isData3DTexture)E.texSubImage3D(_e,oe,me,Ne,Ze,he,re,pe,He,rt,We.data);else if(g.isCompressedArrayTexture)E.compressedTexSubImage3D(_e,oe,me,Ne,Ze,he,re,pe,He,We.data);else E.texSubImage3D(_e,oe,me,Ne,Ze,he,re,pe,He,rt,We);else if(a.isDataTexture)E.texSubImage2D(E.TEXTURE_2D,oe,me,Ne,he,re,He,rt,We.data);else if(a.isCompressedTexture)E.compressedTexSubImage2D(E.TEXTURE_2D,oe,me,Ne,We.width,We.height,He,We.data);else E.texSubImage2D(E.TEXTURE_2D,oe,me,Ne,he,re,He,rt,We);fe.pixelStorei(E.UNPACK_ROW_LENGTH,ot);fe.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Oe);fe.pixelStorei(E.UNPACK_SKIP_PIXELS,Et);fe.pixelStorei(E.UNPACK_SKIP_ROWS,at);fe.pixelStorei(E.UNPACK_SKIP_IMAGES,Lt);if(oe===0&&g.generateMipmaps===!0&&g.mipmapsAutoUpdate===!0)E.generateMipmap(_e);fe.unbindTexture()};this.initRenderTarget=function(a){if(Re.get(a).__webglFramebuffer===void 0)Pe.setupRenderTarget(a)};this.initTexture=function(a){if(a.isCubeTexture)Pe.setTextureCube(a,0);else if(a.isData3DTexture)Pe.setTexture3D(a,0);else if(a.isDataArrayTexture||a.isCompressedArrayTexture)Pe.setTexture2DArray(a,0);else Pe.setTexture2D(a,0);fe.unbindTexture()};this.resetState=function(){Y=0;Q=0;y=null;fe.reset();ee.reset()};if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ColorManagement._getDrawingBufferColorSpace(e);n.unpackColorSpace=ColorManagement._getUnpackColorSpace()}}export{ACESFilmicToneMapping,AddEquation,AddOperation,AdditiveBlending,AgXToneMapping,AlphaFormat,AlwaysCompare,AlwaysDepth,ArrayCamera,BackSide,BoxGeometry,BufferAttribute,BufferGeometry,ByteType,CineonToneMapping,ClampToEdgeWrapping,Color,ColorManagement,ConstantAlphaFactor,ConstantColorFactor,CubeCamera,CubeDepthTexture,CubeReflectionMapping,CubeRefractionMapping,CubeTexture,CullFaceBack,CullFaceFront,CullFaceNone,CustomBlending,CustomToneMapping,Data3DTexture,DataArrayTexture,DataTexture,DepthFormat,DepthStencilFormat,DepthTexture,DoubleSide,DstAlphaFactor,DstColorFactor,EqualCompare,EqualDepth,EquirectangularReflectionMapping,EquirectangularRefractionMapping,EventDispatcher,ExternalTexture,Float32BufferAttribute,FloatType,FrontSide,Frustum,FrustumArray,GLSL3,GreaterCompare,GreaterDepth,GreaterEqualCompare,GreaterEqualDepth,HalfFloatType,IntType,Layers,LessCompare,LessDepth,LessEqualCompare,LessEqualDepth,LinearFilter,LinearMipmapLinearFilter,LinearMipmapNearestFilter,LinearSRGBColorSpace,LinearToneMapping,LinearTransfer,Matrix3,Matrix4,MaxEquation,Mesh,MeshDepthMaterial,MeshDistanceMaterial,MinEquation,MirroredRepeatWrapping,MixOperation,MultiplyBlending,MultiplyOperation,NearestFilter,NearestMipmapLinearFilter,NearestMipmapNearestFilter,NeutralToneMapping,NeverCompare,NeverDepth,NoBlending,NoColorSpace,NoToneMapping,NormalBlending,NotEqualCompare,NotEqualDepth,ObjectSpaceNormalMap,OneFactor,OneMinusConstantAlphaFactor,OneMinusConstantColorFactor,OneMinusDstAlphaFactor,OneMinusDstColorFactor,OneMinusSrcAlphaFactor,OneMinusSrcColorFactor,OrthographicCamera,PCFShadowMap,PCFSoftShadowMap,PMREMGenerator,PerspectiveCamera,Plane,PlaneGeometry,R11_EAC_Format,RED_GREEN_RGTC2_Format,RED_RGTC1_Format,REVISION,RG11_EAC_Format,RGBAFormat,RGBAIntegerFormat,RGBA_ASTC_10x10_Format,RGBA_ASTC_10x5_Format,RGBA_ASTC_10x6_Format,RGBA_ASTC_10x8_Format,RGBA_ASTC_12x10_Format,RGBA_ASTC_12x12_Format,RGBA_ASTC_4x4_Format,RGBA_ASTC_5x4_Format,RGBA_ASTC_5x5_Format,RGBA_ASTC_6x5_Format,RGBA_ASTC_6x6_Format,RGBA_ASTC_8x5_Format,RGBA_ASTC_8x6_Format,RGBA_ASTC_8x8_Format,RGBA_BPTC_Format,RGBA_ETC2_EAC_Format,RGBA_PVRTC_2BPPV1_Format,RGBA_PVRTC_4BPPV1_Format,RGBA_S3TC_DXT1_Format,RGBA_S3TC_DXT3_Format,RGBA_S3TC_DXT5_Format,RGBFormat,RGB_BPTC_SIGNED_Format,RGB_BPTC_UNSIGNED_Format,RGB_ETC1_Format,RGB_ETC2_Format,RGB_PVRTC_2BPPV1_Format,RGB_PVRTC_4BPPV1_Format,RGB_S3TC_DXT1_Format,RGFormat,RGIntegerFormat,RawShaderMaterial,RedFormat,RedIntegerFormat,ReinhardToneMapping,RepeatWrapping,ReverseSubtractEquation,SIGNED_R11_EAC_Format,SIGNED_RED_GREEN_RGTC2_Format,SIGNED_RED_RGTC1_Format,SIGNED_RG11_EAC_Format,SRGBColorSpace,SRGBTransfer,ShaderChunk,ShaderLib,ShaderMaterial,ShortType,SrcAlphaFactor,SrcAlphaSaturateFactor,SrcColorFactor,SubtractEquation,SubtractiveBlending,TangentSpaceNormalMap,Texture,Uint16BufferAttribute,Uint32BufferAttribute,UniformsLib,UniformsUtils,UnsignedByteType,UnsignedInt101111Type,UnsignedInt248Type,UnsignedInt5999Type,UnsignedIntType,UnsignedShort4444Type,UnsignedShort5551Type,UnsignedShortType,VSMShadowMap,Vector2,Vector3,Vector4,WebGLCoordinateSystem,WebGLCubeRenderTarget,WebGLRenderTarget,WebGLRenderer,WebGLUtils,WebXRController,ZeroFactor,createCanvasElement,error,log,warn,warnOnce};